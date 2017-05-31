/*! konyviz 2017-04-05 */
var iterationStartTime,platformName=kony.os.deviceInfo().name.toLowerCase(),isWindows=!1;"windows"!=platformName&&"windowsphone"!=platformName||(isWindows=!0);var __getAuthHeader__=function(a,b){var c=new KOAuth(null,null,notesDBURLs.consumerKey,notesDBURLs.consumerSecret,KOAuth._constants.VERSION_1_0,"",KOAuth._constants.SIGNATURE_SHA1),d=kony.ds.read("acc_token"),e=null,f=null;if(null!=d&&void 0!=d){e=d[0].oauth_access_token,f=d[0].oauth_access_token_secret;var g={},h=c._prepareParameters(e,f,a,b,null),i=c._buildAuthorizationHeaders(h);g[KOAuth._constants.HTTP_AUTHORIZATION_HEADER]=i;for(var j in c._headers)c._headers.hasOwnProperty(j)&&(g[j]=c._headers[j]);return kony.print("@@@@@@HEADER PARAMS: "+JSON.stringify(g)),g}},__updateNotesToRemoteDB__=function(a,b){var c=__getDSObjIdForAnnotation__(a),d={};kony.store.getItem(c)&&(d=kony.store.getItem(c));var e,f=0,g=0;a.callbackFP=b,a.annotationMapSize=Object.keys(d).length;for(e in d)!function(b){iterationStartTime=new Date,f++,g=f,processAnnotation(b,a,g)}(d[e]);0==Object.keys(d).length&&b({status:200})},__cloneObject__=function(a){if(null==a||"object"!=typeof a)return a;var b=a.constructor();for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},processAnnotation=function(a,b,c){function d(d){kony.print(a.widgetId+" : Syncing annotation was completed!");var e=b.dsObjID;if(kony.print("SYNCED OR NOT FLAG IS : "+d),d&&(a.synced_on=iterationStartTime.getTime()),kony.store.getItem(e)&&Object.keys(kony.store.getItem(e)).length>0){var f=kony.store.getItem(e);null!=a&&(f[a.widgetId]=a)}kony.store.setItem(e,f),c!=b.annotationMapSize&&0!=b.annotationMapSize||(kony.print("DONE UPDATING COMMENTS TO DB"),b.callbackFP({status:200}))}try{b.dsObjID=__getDSObjIdForAnnotation__(b),a.id=a.widgetId,a.channel=b.channel,processNote(a,b,function(c,e){kony.print("In callback for notes1"),e?(kony.print("In callback for notes2"),a.noteGuid=e,processComments(a,b,d)):d(!1)})}catch(a){kony.print("Error occurred during syncing annotation. Error: "+a+"!")}},processNote=function(a,b,c){function d(a,b){if(400==a){if(null==b||void 0==b)return;if(kony.print("MetaInfo resulttable FOR NOTES "+JSON.stringify(b)),"errmsg"in b)kony.print("Unable to reach host."),c(b.errmsg,null);else if("status"in b&&(kony.print("status : "+JSON.stringify(a)),200==b.status.code&&"result"in b)){var d={};d=isWindows?b.httpResponse.headers.Location:b.httpresponse.headers.Location;var e=d.split("/"),f=e[e.length-1];c(null,f)}}}a.noteGuid&&delete a.noteGuid;var e=__cloneObject__(a);e.formId=e.widgetId=e.id,e.createdOn=(new Date).getTime(),e.modifiedOn=e.createdOn;var f=getNoteParam(e);kony.print("NOTE PARAM BEING SENT"+JSON.stringify(f));var g=notesDBURLs.prototypeBase+notesDBURLs.prototypeApi+"/accounts/"+b.acc_guid+"/project/"+b.proj_guid+"/notes",h=__getAuthHeader__("POST",g);checkPlatformsForInvokeService(g,{method:"post",timeout:100},h,JSON.stringify(f),d,null)},findNewOrUpdatedComments=function(a,b){var c,d={};for(c in a){var e,f=a[c];for(e in f){var g=f[e];kony.print("validateComment(commentObj) : "+validateComment(g)),kony.print("annotation.synced_on"+b.synced_on),kony.print("new Date(commentObj.lastModifiedTime) :"+new Date(g.lastModifiedTime)),kony.print("new Date(annotation.synced_on) :"+new Date(b.synced_on)),validateComment(g)&&(!b.synced_on||new Date(g.lastModifiedTime)>new Date(b.synced_on))&&(d[e]=g)}}return kony.print("updates: "+JSON.stringify(d)),d},processComments=function(a,b,c){function d(a,b){if(h--,a&&(kony.print("PUSHING FAILED COMMENT"+a),i.push(a)),0==h){var d;d=!(i.length>0),c(d)}}kony.print(b.dsObjID+">>"+a.widgetId,"Processing comments");var e=a.comments,f=findNewOrUpdatedComments(e,a),g=Object.keys(f);if(0==g.length)kony.print(b.dsObjID+">>"+a.widgetId,"No new comments found."),c(!0);else{var h=g.length,i=[];g.forEach(function(c){var e=f[c];saveNewComment(a,b,e,d)})}},saveNewComment=function(a,b,c,d){function e(a,b){if(400==a){if(null==b||void 0==b)return;kony.print("MetaInfo resulttable FOR COMMENTS "+JSON.stringify(b)),"errmsg"in b?(kony.print("Unable to reach host."),kony.print("FAILED TO PUSH THE COMMENT : "+c.comment),d(c.guid)):"status"in b&&200==b.status.code&&"result"in b&&(kony.print("PUSHED THE COMMENT SUCCESSFULLY : "+c.comment),d(null))}}try{kony.print(b.dsObjID+">>"+a.widgetId,"Saving new comment.");var c=getCommentParam(c);kony.print("NOTE GUID FOR COMMENT"+a.noteGuid);var f=notesDBURLs.prototypeBase+notesDBURLs.prototypeApi+"/accounts/"+b.acc_guid+"/project/"+b.proj_guid+"/notes/"+a.noteGuid+"/comment",g=__getAuthHeader__("POST",f);checkPlatformsForInvokeService(f,{method:"post",timeout:100},g,JSON.stringify(c),e,null)}catch(a){d(c.guid)}},validateComment=function(a){return a.commentId&&a.createdOn&&a.createdById&&a.createdBy&&a.createdByEmail&&a.lastModifiedTime&&a.comment&&"Anonymous"!=a.createdBy},__fetchNotesFromRemoteDB__=function(a,b){function c(a,b){b=formatComment(b);var c=b.widgetId;a.comments[c]||(a.comments[c]={});var d=a.comments[c],e=b.commentId;return d[e]=b,a.synced_on=(new Date).getTime(),a.comments[c]=d,a}function d(d,i){var j=__cloneObject__(a),k=__getDSObjIdForAnnotation__(j),l={};if(kony.store.getItem(k)&&(l=kony.store.getItem(k)),400==d){if(null==i||void 0==i)return;if(kony.print("MetaInfo resulttable "+JSON.stringify(i)),"errmsg"in i)kony.print("Unable to reach host."),b({status:500,error:"Could not reach the host"});else if("status"in i&&200==i.status.code&&"result"in i){var m,n=i.result;for(m in n){var o=n[m];if(kony.print("New COMMENT "+JSON.stringify(o)),j.annotation_id=o.widget_id,j.channel=o.channel,g.push(new Date(o.db_sync_time).getTime()),null!=l[j.annotation_id]&&void 0!=l[j.annotation_id]){var p=l[j.annotation_id];p=c(p,o),null!=p&&(l[j.annotation_id]=p)}else{var p=c({widgetId:j.annotation_id,active:1,comments:{}},o);null!=p&&(l[j.annotation_id]=p)}}}}if(kony.store.setItem(k,l),g.length>0&&(e=Math.max.apply(Math,g),kony.print("updated_since TIME STAMP"+e)),kony.store.setItem(h,[{updated_since:e}]),a.annotation_id=f,null!==fpas.readAnnotationFromDataStore(a)){var p=fpas.readAnnotationFromDataStore(a);b({status:200,data:p})}else b({status:500,error:"Could not read annotation from Data store"})}var e,f=a.annotation_id,g=[],h=a.proj_guid+"_lastPullTime";kony.store.getItem(h)&&kony.store.getItem(h).length>0&&(e=kony.store.getItem(h)[0].updated_since||1),kony.print("FETCHING PROJECT PARAMS"+JSON.stringify(a));var i;i=e?notesDBURLs.prototypeBase+notesDBURLs.prototypeApi+"/accounts/"+a.acc_guid+"/project/"+a.proj_guid+"/channel/"+a.channel+"/comments/"+e:notesDBURLs.prototypeBase+notesDBURLs.prototypeApi+"/accounts/"+a.acc_guid+"/project/"+a.proj_guid+"/channel/"+a.channel+"/comments/",kony.print("FETCHING COMMENTS");var j=__getAuthHeader__("GET",i);if(isWindows){var k=new Date(1970,1,1);j["if-modified-since"]=k.toUTCString()}kony.net.invokeServiceAsync(i,{httpconfig:{method:"get",timeout:100},httpheaders:j},d,null)},fpnotes={updateNotesToRemoteDB:__updateNotesToRemoteDB__,fetchNotesFromRemoteDB:__fetchNotesFromRemoteDB__},checkPlatformsForInvokeService=function(a,b,c,d,e,f){isWindows?(kony.print("Calling Windows network service"),kony.print("body : "+JSON.stringify(d)),kony.print("headers : "+JSON.stringify(c)),kony.net.invokeServiceAsync2(a,{httpconfig:b,httpheaders:c,json:d},e,f)):(kony.print("Calling Non-windows network service"),kony.net.invokeServiceAsync(a,{httpconfig:b,httpheaders:c,json:d},e,f))};