require('es6-promise').polyfill();
var nexpect = require('nexpect');

module.exports = {
    login: function (event, msg) {
        nexpect.spawn('surge login', {
            stripColors: true
        })
        .wait(/.*email:.*/)
        .sendline(msg.email)
        .wait(/.*password:.*/)
        .sendline(msg.password)
        .expect(new RegExp('.*Logged in as '+msg.email+'.*'))
        .run(function (err, stdout, exitcode) {
            // return early if it's exiting
            if (exitcode) return;
            if (err) {
                event.sender.send('surge:login', {
                    logged_in: false
                });
            } else {
                event.sender.send('surge:login', {
                    logged_in: true
                });
            }
        });
    },
    whoami: function (event, msg) {
        nexpect.spawn('surge whoami', {
            stripColors: true
        })
        .expect(/.*Logged in as.*/)
        .run(function (err, stdout, exitcode) {
             // return early if it's exiting
            if (exitcode) return;
            if (err) {
                event.sender.send('surge:whoami', {
                    logged_in_as: null
                });
            } else {
                event.sender.send('surge:whoami', {
                    logged_in_as: stdout.join().match(/[\w\d]+@.+\.\w+/)[0]
                });
            }
        });
    }
};
