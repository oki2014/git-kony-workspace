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