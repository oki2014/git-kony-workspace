//startup.js 
var appConfig = {
    appId: "Project00b76ba33e",
    appName: "TestSQLite",
    appVersion: "1.0.0",
    serverIp: "",
    serverPort: "",
    secureServerPort: "",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000,
    })
};

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    FormDataGridGlobals();
    HomeGlobals();
    Home2Globals();
    setAppBehaviors();
    if (typeof startBackgroundWorker != "undefined") {
        startBackgroundWorker();
    }
};

function postAppInitCallBack() {
    apppostappinitFuncPreview();
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: postAppInitCallBack,
        showstartupform: function() {
            Home2.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();