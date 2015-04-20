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
                    type: 'login',
                    logged_in: false
                });
            } else {
                event.sender.send('surge:login', {
                    type: 'login',
                    logged_in: true
                });
            }
        });
    }
};
