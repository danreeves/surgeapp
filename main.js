// External
var menubar = require('menubar');
var dialog = require('dialog');
var ipc = require('ipc');

// Internal
var surge = require('./lib/n/surge');

// Declarations
var mb = menubar();
var appState = {
    currentDir: undefined,
    userDetails: undefined,
    appDetails: undefined,
    running: false
};

mb.on('ready', function ready () {
    ipc.on('surge', function handleEvent (event, msg) {
        surge[msg.type](event, msg);
    });
});
