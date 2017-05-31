define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_TextField_c76b895e11814ab98de9502b6aef6829: function AS_TextField_c76b895e11814ab98de9502b6aef6829(eventobject, changedtext) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.pwd["skin"] = "CopyslTextBox0be77e6d9b58d4c";
            }, null);
        } else {
            (function() {
                self.view.pwd["skin"] = "CopyslTextBox0be77e6d9b58d4c";
            })();
        }
        if ((self.view.container.cnfrmpwd.text !== self.view.container.pwd.text)) {}
        function AS_TextField_c76b895e11814ab98de9502b6aef6829(eventobject, changedtext) {
            var self = this;
            if ((self.view.container.cnfrmpwd.text !== self.view.container.pwd.text)) {
                innerHTML = "Error";
            }
        }
    },
    AS_Button_g36491a7827d477ab61ae3eea82749d1: function AS_Button_g36491a7827d477ab61ae3eea82749d1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    AS_Button_f0d0a2e537734a4f97fdbb410939c690: function AS_Button_f0d0a2e537734a4f97fdbb410939c690(eventobject) {
        var self = this;
        if ((self.view.container.pwd.text !== null) && (self.view.container.cnfrmpwd.text !== null) && (self.view.username.text !== null) && (self.view.emailbox.text !== null)) {
            if ((self.view.container.cnfrmpwd.text !== self.view.container.pwd.text)) {
                self.view.errormsg["isVisible"] = true;
                self.view.errormsg["text"] = "Password not match";
            } else {
                var username = self.view.username["text"];
                var email = self.view.emailbox["text"];
                var password = self.view.container.pwd.text;
                insertData(username, email, password);
            }
        } else {
            self.view.errormsg["isVisible"] = true;
            self.view.errormsg["text"] = "Please fill all the field";
        }
    }
});