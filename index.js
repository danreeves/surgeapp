var ipc = require('ipc');
var lol = document.querySelector('#lol');

function send (e) {
    ipc.send('event', {
        type: 'openDirButton'
    });
}

lol.addEventListener('click', send);
