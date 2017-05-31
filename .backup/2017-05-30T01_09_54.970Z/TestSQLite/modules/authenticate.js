function validateDulu(){
  var username = Home.FlexContainer1.txtUsername;
  var password = Home.FlexContainer1.txtPassword;


}


function createDB(){
  var baseObjectId = kony.db.openDatabase("webSqlDB",
                                          "1.0",
                                          "Sample SQL Database",
                                          5 * 1024 * 1024);// 5MB database

//   kony.db.transaction(baseObjectId,
//                       createTable,
//                       commonErrorCallback,
//                       commonVoidcallback);
}

function createTable(dbId){
  var sqlStatement = "DROP TABLE IF EXISTS user_login";
  kony.db.executeSql(dbId,
                     sqlStatement,
                     null,
                     success_dropTable,
                     commonErrorCallback);

//   sqlStatement = "CREATE TABLE IF NOT EXISTS user_login (loginId REAL PRIMARY KEY,username TEXT, pword TEXT)";
//   kony.db.executeSql(dbId,
//                      sqlStatement,
//                      null,
//                      success_createTable,
//                      commonErrorCallback);
}

function success_createTable( transactionId, resultset ){
//   kony.print = "The Database SampleWebSQLdb was created";
  var basicConf = {message: "Message: " + resultset,
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  kony.ui.Alert(basicConf, pspCOnf);
}

function commonVoidcallback(  ){
  kony.print("The transaction was executed successfully.");
}

function success_dropTable( transactionId, resultset ){
  kony.print("Table was dropped");
  var basicConf = {message: "Table successfully dropped.",
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  kony.ui.Alert(basicConf, pspCOnf);
}

function commonErrorCallback( transactionId, error ){
  var basicConf = {message: "Error." + error,
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                   yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf = {};
  kony.ui.Alert(basicConf, pspCOnf);
  //   if(transactionId !== null && error !== null && error.message !== null){
  //     kony.print("@@@@@@@@@@@@@@@@@@@@@@ Error :: " + error.message);
  //     frmNext.labelCommon.text = error.message;
  //   }
}

function alertCallBack() {

}