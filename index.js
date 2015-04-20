require('es6-promise').polyfill();

var ipc = require('ipc');
var surge = require('./lib/b/surge');

var loginForm = document.querySelector('#login');


loginForm.onsubmit = function (e) {
    e && e.preventDefault();

    surge.login(e.target)
    .then(function success (d) {
        loginForm.remove();
        document.body.innerHTML = 'Logged in!';
    })
    .catch(function (e) {
        console.log('error');
    });

};
