require('es6-promise').polyfill();
var ipc = require('ipc');

module.exports = {
    login: function (form) {
        return new Promise(function (resolve, reject) {
            ipc.on('surge:login', function (msg) {
                if (msg.logged_in) {
                    resolve(msg);
                } else {
                    reject(msg);
                }
            });
            ipc.send('surge', {
                type: 'login',
                email: form.elements[0].value,
                password: form.elements[1].value
            });
        });
    },
    logout: function () {
        return new Promise(function (resolve, reject) {
            ipc.on('surge:logout', function (msg) {
                if (msg.logged_out) {
                    resolve(msg);
                } else {
                    reject(msg);
                }
            });
            ipc.send('surge', {
                type: 'logout'
            });
        });
    },
    whoami: function () {
        return new Promise(function (resolve, reject) {
            ipc.on('surge:whoami', function (msg) {
                if (msg.logged_in_as != null) {
                    resolve(msg);
                } else {
                    reject(msg);
                }
            });
            ipc.send('surge', {
                type: 'whoami'
            });
        });
    }
};
