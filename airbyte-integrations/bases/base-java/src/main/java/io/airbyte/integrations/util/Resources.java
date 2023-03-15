package io.airbyte.integrations.util;

import com.amazonaws.util.IOUtils;
import java.io.Closeable;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Resources {

  private static final Logger LOGGER = LoggerFactory.getLogger(Resources.class);
  private static final Resources instance = new Resources();

  private final List<Closeable> resources = new ArrayList<>();

  public static Resources getInstance() {
    return instance;
  }

  private Resources() {
  }

  public void addCloseable(final Closeable closeable) {
    resources.add(closeable);
  }

  public void closeAll() {
    LOGGER.info("---> begin closeall");
    resources.forEach(closeable -> IOUtils.closeQuietly(closeable, null));
    LOGGER.info("---> end closeall");
  }
}
