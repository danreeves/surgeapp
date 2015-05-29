var goTo = require('./goToSlide');

module.exports = function () {
    var form = document.querySelector('#login');

    form.onsubmit = function loginForm (e) {
        e && e.preventDefault();

        surge.login(e.target)
        .then(function success (d) {
            goTo(1);
            document.body.classList.add('logged-in');
            e.target.elements.each(function (v) {
                v.value = '';
            });
            console.log('logged in as '+d.logged_in_as);
        })
        .catch(function (e) {
            console.log('error', e);
        });

    };
}
