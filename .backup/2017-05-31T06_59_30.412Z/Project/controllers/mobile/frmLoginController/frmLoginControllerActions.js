define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e668b50475754310ac2c1abf2291fc7e: function AS_Button_e668b50475754310ac2c1abf2291fc7e(eventobject) {
        var self = this;
        var username = self.view.Username.text;
        var password = self.view.Password.text;
        doTransactionsqlSelect.call(this);
        //doTransactionsqlSelect();
        getData(username, password);
    },
    AS_Button_ic255b129b8949c2baa07b03c7cc0ab7: function AS_Button_ic255b129b8949c2baa07b03c7cc0ab7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSingUp");
        ntf.navigate();
    },
    AS_Form_dca1b37fab2f467caecc631b71f0108d: function AS_Form_dca1b37fab2f467caecc631b71f0108d(eventobject) {
        var self = this;
        createDB.call(this);
    }
});