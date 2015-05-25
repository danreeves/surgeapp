var goTo = require('./goToSlide');

module.exports = function () {

    document.querySelector('#logout').addEventListener('click', function logOutButton (e) {
        e && e.preventDefault();

        surge.logout()
        .then(function (d) {
            goTo(0);
            console.log('logged out');
        })
        .catch(function (e) {
            console.log('not logged out');
        })

    });
}
