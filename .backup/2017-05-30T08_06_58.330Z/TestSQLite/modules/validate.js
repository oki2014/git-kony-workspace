// Define global reusable base object id.
GLOBALUSERNAME = "";
BASEOBJECTID = kony.db.openDatabase("webSqlDB",
                                    "1.0",
                                    "Sample SQL Database",
                                    5 * 1024 * 1024);

function createTable(){
  kony.db.transaction(BASEOBJECTID,
                      createTableProcess);
}

function createTableProcess(dbId){
  //   var sqlStatement = "DROP TABLE IF EXISTS user_login";
  //   kony.db.executeSql(dbId,
  //                      sqlStatement,
  //                      null,
  //                      success_dropTable,
  //                      commonErrorCallback);

  sqlStatement = "CREATE TABLE IF NOT EXISTS user_login (loginId REAL PRIMARY KEY AUTOINCREMENT,username TEXT, pword TEXT)";
  kony.db.executeSql(dbId,
                     sqlStatement);
}

function insertData(){
  kony.db.transaction(BASEOBJECTID,
                      insertDataProcess,
                      commonErrorCallback,
                      commonVoidcallback);
}

function insertDataProcess(dbId){
  // Please change accordingly.
  var username = Home2.txtUsername.text;
  var password = Home2.txtPassword.text;
  var sqlStatement = "INSERT INTO user_login (username, pword) VALUES (\""+username+"\", \""+password+"\")";
  kony.db.executeSql(dbId,
                     sqlStatement,
                     null,
                     success_insertData,
                     commonErrorCallback);
}

function retrieveData(){

  kony.db.transaction(BASEOBJECTID,
                      retrieveDataProcess,
                      commonErrorCallback,
                      commonVoidcallback);
}

function retrieveDataProcess(dbId){
  var username = Home2.txtUsername.text;
  var password = Home2.txtPassword.text;
  var sqlStatement = "SELECT * FROM user_login WHERE username = \""+username+"\" AND  pword = \""+password+"\"";

  kony.db.executeSql(dbId,
                     sqlStatement,
                     null,
                     success_selectData,
                     commonErrorCallback);
}

function success_selectData(transactionId, resultset){
  var basicConf2 = {message: "Error." + transactionId + " | " + resultset,
                    alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
                    yesLabel: "ok", alertHandler: alertCallBack()};
  var pspCOnf2 = {};
  kony.ui.Alert(basicConf2, pspCOnf2);
  if(resultset !== null){
    var numResults = resultset.rows.length;
    if(numResults > 0){
      var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, 0);
      GLOBALUSERNAME = rowItem.username;

      var basicConf = {message: "Welcome " + GLOBALUSERNAME + "! You are now logged in.", 
                       alertType: constants.ALERT_TYPE_INFO, alertTitle: "Success",
                       yesLabel: "ok", alertHandler: alertCallBack()};
      var pspCOnf = {};
      kony.ui.Alert(basicConf, pspCOnf);
    }
  }
}

function success_insertData( transactionId, resultset ){
  var basicConf = {message: "Data successfully added.",
                   alertType: constants.ALERT_TYPE_INFO, alertTitle: "Success",
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
}

function commonVoidcallback(  ){
  // Nothing to see here..
}

function alertCallBack(){

}