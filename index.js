require('es6-promise').polyfill();

var ipc = require('ipc');
var surge = require('./lib/b/surge');

var loginForm = document.querySelector('#login');
var whoami = document.querySelector('#whoami');


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

whoami.addEventListener('click', function (e) {
    e && e.preventDefault();

    surge.whoami()
    .then(function success (d) {
        console.log(d.logged_in_as);
    })
    .catch(function (e) {
        console.log('error', e);
    })

});
