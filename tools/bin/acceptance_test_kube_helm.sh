#!/usr/bin/env bash

set -e

. tools/lib/lib.sh

assert_root

# Since KIND does not have access to the local docker agent, manually load the minimum images required for the Kubernetes Acceptance Tests.
# See https://kind.sigs.k8s.io/docs/user/quick-start/#loading-an-image-into-your-cluster.
if [ -n "$CI" ]; then
  echo "Loading images into KIND..."
  kind load docker-image airbyte/server:dev --name helm-testing &
  kind load docker-image airbyte/webapp:dev --name helm-testing &
  kind load docker-image airbyte/worker:dev --name helm-testing &
  kind load docker-image airbyte/db:dev --name helm-testing &
  kind load docker-image airbyte/container-orchestrator:dev --name helm-testing &
  kind load docker-image airbyte/bootloader:dev --name helm-testing &
  wait
fi

echo "Replacing default Chart.yaml and values.yaml with a test one"
# mv charts/airbyte/Chart.yaml charts/airbyte/Chart.yaml.old
# mv charts/airbyte/Chart.yaml.test charts/airbyte/Chart.yaml 
# mv charts/airbyte/values.yaml charts/airbyte/values.yaml.old
# mv charts/airbyte/values.yaml.test charts/airbyte/values.yaml 

echo "Starting app..."

echo "Applying dev-integration-test manifests to kubernetes..."
cd charts/airbyte && helm dep update && cd -
helm upgrade --install --debug --values chart/airbyte/values.yaml.test airbyte charts/airbyte

echo "Waiting for server to be ready..."
kubectl wait --for=condition=Available deployment/airbyte-server --timeout=300s || (kubectl describe pods && exit 1)

echo "Scale up workers by 2"
kubectl scale --replicas=2 deployment airbyte-worker

echo "Listing nodes scheduled for pods..."
kubectl describe pods | grep "Name\|Node"

# allocates a lot of time to start kube. takes a while for postgres+temporal to work things out
sleep 120

if [ -n "$CI" ]; then
  server_logs () { kubectl logs deployment.apps/airbyte-server > /tmp/kubernetes_logs/server.txt; }
  pod_sweeper_logs () { kubectl logs deployment.apps/airbyte-pod-sweeper > /tmp/kubernetes_logs/pod_sweeper.txt; }
  worker_logs () { kubectl logs deployment.apps/airbyte-worker > /tmp/kubernetes_logs/worker.txt; }
  db_logs () { kubectl logs deployment.apps/airbyte-db > /tmp/kubernetes_logs/db.txt; }
  temporal_logs () { kubectl logs deployment.apps/airbyte-temporal > /tmp/kubernetes_logs/temporal.txt; }
  describe_pods () { kubectl describe pods > /tmp/kubernetes_logs/describe_pods.txt; }
  describe_nodes () { kubectl describe nodes > /tmp/kubernetes_logs/describe_nodes.txt; }
  write_all_logs () {
    server_logs;
    worker_logs;
    db_logs;
    temporal_logs;
    pod_sweeper_logs;
    describe_nodes;
    describe_pods;
  }
# Uncomment for debugging. Warning, this is verbose.
#  trap "mkdir -p /tmp/kubernetes_logs && write_all_logs" EXIT
fi

kubectl port-forward svc/airbyte-airbyte-server-svc 8001:8001 &

echo "Running worker integration tests..."
SUB_BUILD=PLATFORM  ./gradlew :airbyte-workers:integrationTest --scan

echo "Printing system disk usage..."
df -h

echo "Printing docker disk usage..."
docker system df

if [ -n "$CI" ]; then
  echo "Pruning all images..."
  docker image prune --all --force

  echo "Printing system disk usage after pruning..."
  df -h

  echo "Printing docker disk usage after pruning..."
  docker system df
fi
echo "Check if server connection still alive..."

if curl -sSf -o /dev/null http://localhost:8001/api/v1/health; then
  echo "Connection is alive..."
else
  echo "Connection is not alive..."
  echo "Port forwarding pod..."
  kubectl port-forward svc/airbyte-airbyte-server-svc 8001:8001 &
fi

echo "Running e2e tests via gradle..."
KUBE=true SUB_BUILD=PLATFORM USE_EXTERNAL_DEPLOYMENT=true ./gradlew :airbyte-tests:acceptanceTests --scan

echo "Reverting changes back"
mv charts/airbyte/Chart.yaml charts/airbyte/Chart.yaml.test
mv charts/airbyte/Chart.yaml.old charts/airbyte/Chart.yaml
mv charts/airbyte/values.yaml charts/airbyte/values.yaml.test
mv charts/airbyte/values.yaml.old charts/airbyte/values.yaml
