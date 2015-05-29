require('es6-promise').polyfill();
require('./lib/b/each');

var ipc = require('ipc');
var surge = require('./lib/b/surge');
var goTo = require('./lib/b/goToSlide');

var loginForm = require('./lib/b/loginForm');
var logoutButton = require('./lib/b/logoutButton');
var selectProject = require('./lib/b/selectProject');

logoutButton();
loginForm();
selectProject();

// Test if already logged in
surge.whoami()
.then(function (msg) {
    goTo(1);
    document.body.classList.add('logged-in');
    console.log(msg.logged_in_as);
})
.catch(function (msg) {
    console.log('not logged in yet');
});
