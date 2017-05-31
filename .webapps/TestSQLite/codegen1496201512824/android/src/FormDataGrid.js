function addWidgetsFormDataGrid() {
    FormDataGrid.setDefaultUnit(kony.flex.DP);
    var dataGrid1 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Login Id",
            "columnHeaderType": "text",
            "columnID": "loginId",
            "columnOnClick": null,
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Username",
            "columnHeaderType": "text",
            "columnID": "username",
            "columnOnClick": null,
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 34,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderTemplate": null,
            "columnHeaderText": "Password",
            "columnHeaderType": "text",
            "columnID": "password",
            "columnOnClick": null,
            "columnText": "Not Defined",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "loginId": "",
            "password": "",
            "username": ""
        }],
        "headerSkin": "slDataGridHead",
        "height": "260dp",
        "id": "dataGrid1",
        "isMultiSelect": false,
        "isVisible": false,
        "left": "51dp",
        "rowAlternateSkin": "slDataGridAltRow",
        "rowCount": 1,
        "rowFocusSkin": "slDataGridFocusedRow",
        "rowNormalSkin": "slDataGridRow",
        "showColumnHeaders": true,
        "top": "80dp",
        "width": "78.67%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0cd86ed92b77b4b = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0cd86ed92b77b4b",
        "isVisible": true,
        "left": "51dp",
        "onClick": AS_Button_f04984e4f82b4cc6a6168ffea375a260,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "465dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0cfb54e62a04840 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0cfb54e62a04840",
        "isVisible": true,
        "left": "44dp",
        "onClick": AS_Button_ia986f39503c4de88ab1b53eee699c9e,
        "skin": "slButtonGlossBlue",
        "text": "Cuba Add Data",
        "top": "531dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0b3c13da353d34a = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0b3c13da353d34a",
        "isVisible": true,
        "left": "51dp",
        "onClick": AS_Button_be9b5577ab57481dab347abd403d604a,
        "skin": "slButtonGlossBlue",
        "text": "Alert Data",
        "top": "382dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var showNameTxt = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "showNameTxt",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "39dp",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "text": "TextBox2",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "343dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var showSQLData = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "257dp",
        "id": "showSQLData",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "44dp",
        "numberOfVisibleLines": 3,
        "skin": "slTextArea",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "32dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    FormDataGrid.add(dataGrid1, Button0cd86ed92b77b4b, Button0cfb54e62a04840, Button0b3c13da353d34a, showNameTxt, showSQLData);
};

function FormDataGridGlobals() {
    FormDataGrid = new kony.ui.Form2({
        "addWidgets": addWidgetsFormDataGrid,
        "enabledForIdleTimeout": false,
        "id": "FormDataGrid",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    FormDataGrid.info = {
        "kuid": "fb790e82b30848e0acb442520ab55df3"
    };
};