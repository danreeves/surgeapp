var goTo = require('./goToSlide');

module.exports = function () {

    document.querySelector('.js-logout').addEventListener('click', function logOutButton (e) {
        e && e.preventDefault();

        surge.logout()
        .then(function (d) {
            goTo(0);
            document.body.classList.remove('logged-in');
            console.log('logged out');
        })
        .catch(function (e) {
            console.log('not logged out');
        })

    });
}
