require('es6-promise').polyfill();
var dialog = require('dialog');
var p = require('path');
var fs = require('fs');

module.exports = {
    selectProject: function (event, msg) {
        dialog.showOpenDialog({
            properties: ['openDirectory']
        }, function opened (path) {
            path = (path.length) ? path[0] : null;
            fs.readFile(p.join(path, 'CNAME'), 'utf8', function openCNAME (err, data) {
                data = (data && err == null) ? data.trim() : null;
                event.sender.send('action:selectProject', {
                    path: path,
                    CNAME: data
                });
            });
        });
    }
}
