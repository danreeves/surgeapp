// External
var menubar = require('menubar');
var dialog = require('dialog');
var ipc = require('ipc');

// Internal
var surge = require('./lib/n/surge');
var actions = require('./lib/n/actions');

// Declarations
var mb = menubar({
    height: 338,
    dir: './',
    preloadWindow: true
});
var app = {
    surge: require('./lib/n/surge'),
    actions: require('./lib/n/actions')
};

mb.on('ready', function ready () {
    ipc.on('surge', function handleEvent (event, msg) {
        app.surge[msg.type](event, msg);
    });
    ipc.on('action', function handleAction (event, msg) {
        app.actions[msg.type](event, msg);
    })
});


// DEBUG
mb.on('after-show', function () {
    // mb.window.openDevTools({
    //     detach: true
    // });
});
