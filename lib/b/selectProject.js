var ipc = require('ipc');
var appState = require('./appState');
var goTo = require('./goToSlide');
var surgeForm = require('./surgeForm');

module.exports = function () {
    document.querySelectorAll('.js-select-project')
    .each(function (el) {
        el.addEventListener('click', function selectProject(e) {
            if (e) e.preventDefault();
            ipc.send('action', {
                type: 'selectProject'
            });
        });
    });
};

ipc.on('action:selectProject', function (msg) {
    if (msg.path != null) {
        appState.project = msg.path;
        appState.CNAME = msg.CNAME;
        surgeForm();
    }
});
