"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[42744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="Edit stream configuration",l={unversionedId:"cloud/managing-airbyte-cloud/edit-stream-configuration",id:"cloud/managing-airbyte-cloud/edit-stream-configuration",title:"Edit stream configuration",description:"By editing stream configurations, you can customize how your data syncs to the destination. This allows you to manage aspects of the sync, such as replication frequency, destination namespace, and ensuring your data is written to the correct location.",source:"@site/../docs/cloud/managing-airbyte-cloud/edit-stream-configuration.md",sourceDirName:"cloud/managing-airbyte-cloud",slug:"/cloud/managing-airbyte-cloud/edit-stream-configuration",permalink:"/cloud/managing-airbyte-cloud/edit-stream-configuration",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/managing-airbyte-cloud/edit-stream-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Managing Airbyte Cloud",permalink:"/category/managing-airbyte-cloud"},next:{title:"Manage schema changes",permalink:"/cloud/managing-airbyte-cloud/manage-schema-changes"}},c={},s=[],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edit-stream-configuration"},"Edit stream configuration"),(0,r.kt)("p",null,"By editing stream configurations, you can customize how your data syncs to the destination. This allows you to manage aspects of the sync, such as replication frequency, destination namespace, and ensuring your data is written to the correct location."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("a",{parentName:"p",href:"http://cloud.airbyte.io"},"Airbyte Cloud")," dashboard, click ",(0,r.kt)("strong",{parentName:"p"},"Connections")," and then click the connection you want to change.   ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Replication")," tab."))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Transfer")," and ",(0,r.kt)("strong",{parentName:"p"},"Streams")," settings include the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Replication frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"How often the data syncs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/manage-schema-changes/#review-non-breaking-schema-changes"},"Non-breaking schema updates")," detected"),(0,r.kt)("td",{parentName:"tr",align:null},"How Airbyte handles syncs when it detects non-breaking schema changes in the source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Where the replicated data is written")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination Stream Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Helps you identify streams from different connectors")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These parameters apply to all streams in the connection.")),(0,r.kt)("p",null,"If you need to use ",(0,r.kt)("a",{parentName:"p",href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"},"cron scheduling"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Replication Frequency")," dropdown, click ",(0,r.kt)("strong",{parentName:"li"},"Cron"),". "),(0,r.kt)("li",{parentName:"ol"},"Enter a cron expression and choose a time zone to create a sync schedule.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Only one sync per connection can run at a time. "),(0,r.kt)("li",{parentName:"ul"},"If cron schedules a sync to run before the last one finishes, the scheduled sync will start after the last sync completes."),(0,r.kt)("li",{parentName:"ul"},"Airbyte Cloud does not allow schedules that sync more than once per hour. "))),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Activate the streams you want to sync section"),", you can make changes to any stream you choose."),(0,r.kt)("p",null,"To search for a stream:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Search stream name")," search box. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type the name of the stream you want to find.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Streams matching your search are displayed in the list."))),(0,r.kt)("p",null,"To change individual stream configuration:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/106352739/187313088-85c61a6d-1025-45fa-b14e-a7fe86defea4.gif",alt:"Single Edit Gif 7"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Sync")," column of the stream, toggle the sync on or off. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the dropdown arrow in the ",(0,r.kt)("strong",{parentName:"p"},"Sync mode")," column and select the sync mode you want to apply."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Depending on the sync mode you select, you may need to choose a cursor or primary key.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"If there is a dropdown arrow in the ",(0,r.kt)("strong",{parentName:"li"},"Cursor")," or ",(0,r.kt)("strong",{parentName:"li"},"Primary key")," fields, click the dropdown arrow and choose the cursor or primary key. ")),(0,r.kt)("p",null,"To change multiple stream configurations:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/106352739/187312110-d16b4f9a-9d43-4b23-b644-b64004f33b58.gif",alt:"Batch Edit gif 5"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the first checkbox in the table header to select all streams in the connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deselect the checkboxes of streams you do not want to apply these changes to.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the highlighted header of the table, toggle the sync on or off. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the dropdown arrow in the ",(0,r.kt)("strong",{parentName:"p"},"Sync mode")," column and select the sync mode you want to apply to these streams.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there is a dropdown arrow in the ",(0,r.kt)("strong",{parentName:"p"},"Cursor")," or ",(0,r.kt)("strong",{parentName:"p"},"Primary key")," fields of the highlighted table header, click the dropdown arrow and choose the cursor or primary key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply")," to apply these changes to the streams you selected, or click ",(0,r.kt)("strong",{parentName:"p"},"Cancel")," to discard the changes."))),(0,r.kt)("p",null,"To save the changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save changes"),", or click ",(0,r.kt)("strong",{parentName:"p"},"Cancel")," to discard the changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Stream configuration changed")," dialog displays. This gives you the option to reset streams when you save the changes."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Airbyte recommends that you reset streams. A reset will delete data in the destination of the affected streams and then re-sync that data. Skipping a reset is discouraged and might lead to unexpected behavior.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save connection"),", or click ",(0,r.kt)("strong",{parentName:"li"},"Cancel")," to close the dialog. ")),(0,r.kt)("p",null,"To refresh the source schema:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Refresh source schema")," to fetch the schema of your data source.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the schema has changed, the ",(0,r.kt)("strong",{parentName:"p"},"Refreshed source schema")," dialog displays them."))))}m.isMDXComponent=!0}}]);