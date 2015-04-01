// External
var menubar = require('menubar');
var dialog = require('dialog');
var ipc = require('ipc');

// Internal
var userDetails = require('./lib/userDetails');
var appDetails  = require('./lib/appDetails');
var eventHandlers = require('./lib/eventHandlers');

// Declarations
var mb = menubar();
var appState = {
    currentDir: undefined,
    userDetails: undefined,
    appDetails: undefined,
    running: false
};

mb.on('ready', function ready () {

    appState.userDetails = userDetails.load(appState);
    appState.appDetails  = appDetails.load(appState);

    ipc.on('event', function handleEvent (event, msg) {
        eventHandlers[msg.type](msg);
    });

});
