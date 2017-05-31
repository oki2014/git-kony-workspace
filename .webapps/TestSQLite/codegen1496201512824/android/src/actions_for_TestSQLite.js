//actions.js file 
function AS_Button_be9b5577ab57481dab347abd403d604a(eventobject) {
    // var myData = FormDataGrid.dataGrid1.data;
    // var basicConf = {message: myData,
    //                  alertType: constants.ALERT_TYPE_INFO, alertTitle: "Validation",
    //                  yesLabel: "ok", alertHandler: alertCallBack()};
    // var pspCOnf = {};
    // kony.ui.Alert(basicConf, pspCOnf);
    retrieveData.call(this);
}

function AS_Button_c7477e7d7aa342198c0c5664ee814718(eventobject) {
    return retrieveData.call(this);
}

function AS_Button_ddfffd0dd9d6489ba568c9b60e52d7e9(eventobject) {
    var dataGrid = FormDataGrid.dataGrid1;
    var user = Home.txtUsername.text;
    var pass = Home.txtPassword.text;
    var data = {
        loginId: "mytext",
        username: user,
        password: pass
    };
    dataGrid.addAll(data);
    insertData.call(this);
}

function AS_Button_f04984e4f82b4cc6a6168ffea375a260(eventobject) {
    Home.show();
}

function AS_Button_h26f553a884a45cda6d9f24412b1854f(eventobject) {}

function AS_Button_ia986f39503c4de88ab1b53eee699c9e(eventobject) {
    var dataGrid = FormDataGrid.dataGrid1;
    var data = [{
        loginId: "mytext",
        username: "user",
        password: "pass"
    }];
    dataGrid.addAll(data);
}

function AS_Button_j20ad48762234f53b4a3257c74ba9408(eventobject) {
    setUsername.call(this);
    showUsername.call(this);
    FormDataGrid.show();
}

function AS_Button_j772aecc70ef4927b8a128cbda978c62(eventobject) {
    return insertData.call(this);
}

function AS_Form_d3fa1d0184ef4efc9c8e50445a5d4f42(eventobject) {
    USERNAMEGLOBAL = "";
}

function AS_Form_d5190783a6814cf097146bce61b6cbb5(eventobject) {
    return createDB.call(this);
}

function AS_Form_d91320562bfc42e69971c20bed5b2deb(eventobject) {
    return createTable.call(this);
}

function AS_Form_h44916007bb847ce8231b53e4500f68e(eventobject) {}

function AS_Form_h7dc2dc54c474b238947937fc4833cff(eventobject) {
    return createDB.call(this);
}