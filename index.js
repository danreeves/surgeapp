require('es6-promise').polyfill();

var ipc = require('ipc');
var surge = require('./lib/b/surge');

var loginForm = document.querySelector('#login');
var logout = document.querySelector('#logout');
var whoami = document.querySelector('#whoami');

loginForm.onsubmit = function (e) {
    e && e.preventDefault();

    surge.login(e.target)
    .then(function success (d) {
        console.log('logged in as '+d.logged_in_as);
    })
    .catch(function (e) {
        console.log('error');
    });

};

whoami.addEventListener('click', function (e) {
    e && e.preventDefault();

    surge.whoami()
    .then(function success (d) {
        console.log(d.logged_in_as);
    })
    .catch(function (e) {
        console.log('not logged in');
    })

});

logout.addEventListener('click', function (e) {
    e && e.preventDefault();

    surge.logout()
    .then(function (d) {
        console.log('logged out');
    })
    .catch(function (e) {
        console.log('not logged out');
    })

});
