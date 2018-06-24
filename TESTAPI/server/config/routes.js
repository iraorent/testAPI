'use strict';

var path = require('path');
module.exports = function (app) {

    app.use('/test', require('../api/test'));
 
    app.route('/*')
        .get(function(req, res) {
            res.sendFile(path.join(path.normalize(__dirname + '/../..'), 'www//index.html'));
        });

};
