GLOBALDBID = null;

baseObjectId = kony.db.openDatabase("webSqlDB",
                                    "1.0",
                                    "Sample SQL Database",
                                    5 * 1024 * 1024);// 5MB database
function createDB(){
  var basicConf = {message: "Creating DB.",
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  //   kony.ui.Alert(basicConf, pspCOnf);
  kony.db.transaction(baseObjectId,
                      createTable,
                      commonErrorCallback,
                      commonVoidcallback);

}

function createTable(dbId){
  var basicConf = {message: "Creating Table.",
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  //   kony.ui.Alert(basicConf, pspCOnf);
  var sqlStatement = "DROP TABLE IF EXISTS tableUser";
  //   kony.db.executeSql(dbId,
  //                      sqlStatement,
  //                      null,
  //                      success_dropTable,
  //                      commonErrorCallback);

  sqlStatement = "CREATE TABLE IF NOT EXISTS tableUser (loginId INTEGER PRIMARY KEY autoincrement,username TEXT,email TEXT, pword TEXT)";

  kony.db.executeSql(dbId,
                     sqlStatement,
                     null,
                     success_dropTable,
                     commonErrorCallback);

  GLOBALDBID = dbId;
}

function success_dropTable( transactionId, resultset ){
  kony.print("Table was dropped");
  var basicConf = {message: "Table successfully dropped.",
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  //kony.ui.Alert(basicConf, pspCOnf);
}
function alertCallBack (){
  //logic here lrem ipsum
}

function commonErrorCallback( transactionId, error ){
  var basicConf = {message: "Error." + error,
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  // kony.ui.Alert(basicConf, pspCOnf);
}

function commonVoidcallback(  ){
  kony.print("The transaction was executed successfully.");
}
GLOBALid = "";
GLOBALusr = "";
GLOBALpss = "";
function insertData (userid,email,password){
  GLOBALid = userid;
  GLOBALusr = email;
  GLOBALpss = password;
  kony.db.transaction(baseObjectId,
                      insertData2,
                      commonErrorCallback,
                      commonVoidcallback);


}



function insertData2(dbId){


  var sqlStatement = "INSERT INTO tableUser ( username,email,pword) VALUES (\""+GLOBALid+"\",\""+GLOBALusr+"\",\""+GLOBALpss+"\")";
  kony.db.executeSql(dbId,
                     sqlStatement,null,
                     success_insertData,
                     commonErrorCallback);

}
function success_insertData( transactionId, resultset ){
  var basicConf = {message: "Success." + resultset,
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLdoTransactionsqlSelectabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  //   kony.ui.Alert(basicConf, pspCOnf);
  var ntf = new kony.mvc.Navigation("frmLogin");
  ntf.navigate();
}

GLOBALOBJECT = null;

function doTransactionsqlSelect(){
  GLOBALOBJECT = this;
  kony.db.transaction(baseObjectId,
                      sqlSelect,
                      commonErrorCallback,
                      commonVoidcallback);
}

globalUsername="";
globalPass="";
function getData (username,password){
  globalUsername = username;
  globalPass = password;
  kony.db.transaction(baseObjectId,
                      sqlSelect,
                      commonErrorCallback,
                      commonVoidcallback);
}



function sqlSelect( dbId, username, password ){


  //   var sqlStatement = "SELECT name FROM sqlite_master WHERE type='table'";
  var sqlStatement = "SELECT * FROM tableUser WHERE username = \""+globalUsername+"\" AND  pword = \""+globalPass+"\"";


  var basicConf = {message: "SQL."+ sqlStatement,
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  //   kony.ui.Alert(basicConf, pspCOnf);
  kony.db.executeSql(dbId,
                     sqlStatement,
                     null,
                     success_sqlSelect,
                     commonErrorCallback);


}
GLOBALUSERNAME = null;
function success_sqlSelect(transactionId, resultset){


  var basicConf = {message: "success_sqlSelect."+ transactionId+resultset,
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  //   kony.ui.Alert(basicConf, pspCOnf);
  if(resultset !== null ){
    var numRow = resultset.rows.length;
    if(numRow > 0){
      //       for(count = 0;count<numRow;count++){
      //       	var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, count);
      //         basicConf = {message: "Data " + count + ":"+ rowItem.username + "|" + rowItem.pword,
      //                      alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
      //                      yesLabel: "ok", alertHandler: alertCallBack()};
      //         kony.ui.Alert(basicConf, pspCOnf);
      //       }
      var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, 0);
      GLOBALUSERNAME = rowItem.username;
      var ntf = new kony.mvc.Navigation("LandingPage");
      ntf.navigate();
      // GLOBALOBJECT.view.errorText.isVisible = false; 
    }else{
      GLOBALOBJECT.view.errorText.isVisible = true;
    }
  }
}

function initializeUsername(){
  this.view.userToShow.text = "Welcome " + GLOBALUSERNAME;
}


function commonErrorCallback( transactionId, error){
  var basicConf = {message: "Error."+ error,
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  //   kony.ui.Alert(basicConf, pspCOnf);
}

function commonVoidcallback(  ){
  // Nothing to see here..
}

function alertCallBack(){

}


