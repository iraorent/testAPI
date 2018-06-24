'use strict';
var test = require('../../service/test');

exports.index = function (req, res) {
    var option = {};
    if (req.query.key !== undefined) {
        option.key = req.query.key;
        option.timestamp = req.query.timestamp;
    }
    test.read.getRecord(option,function (result) {
        res.json(result);
    });
};

exports.indexbyKey = function (req, res) {
    var option = {};
    if (req.params.key !== undefined) {
        option.key = req.params.key;
    }
    test.read.getOneRecord(option, function (result) {
        res.json(result);
    });
};

exports.create = function (req, res) {
    test.create.createRecord(req.body, processResult);
    function processResult(result) {
        //res.status(result.statusHttp);
        res.json(result.data);
    }
};

