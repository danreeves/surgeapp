require('es6-promise').polyfill();
var nexpect = require('nexpect');
var path = require('path');

var surge = path.join(global.appRoot, 'node_modules', 'surge', 'lib', 'cli.js');
console.log(surge)

module.exports = {
    login: function (event, msg) {
        nexpect.spawn(surge, ['login'], {
            stripColors: true
        })
        .wait(/.*email:.*/)
        .sendline(msg.email)
        .wait(/.*password:.*/)
        .sendline(msg.password)
        .expect(new RegExp('.*Logged in as '+msg.email+'.*'))
        .run(function (err, stdout, exitcode) {
            if (err) {
                event.sender.send('surge:login', {
                    logged_in: false
                });
            } else {
                event.sender.send('surge:login', {
                    logged_in: true,
                    logged_in_as: msg.email
                });
            }
        });
    },
    logout: function (event, msg) {
        nexpect.spawn(surge, ['logout'], {
            stripColors: true
        })
        .expect(/.*Token removed from.*/)
        .run(function (err, stdout, exitcode) {
            if (err) {
                event.sender.send('surge:logout', {
                    logged_out: false
                });
            } else {
                event.sender.send('surge:logout', {
                    logged_out: true
                });
            }
        });
    },
    whoami: function (event, msg) {
        nexpect.spawn(surge, ['whoami'], {
            stripColors: true
        })
        .expect(/.*Logged in as.*/)
        .run(function (err, stdout, exitcode) {
            var emailRegex = /[\w\d]+@.+\.\w+/;
            if (err || stdout.join().search(emailRegex) === -1) {
                event.sender.send('surge:whoami', {
                    logged_in_as: null
                });
            } else {
                event.sender.send('surge:whoami', {
                    logged_in_as: stdout.join().match(emailRegex)[0]
                });
            }
        });
    }
};
