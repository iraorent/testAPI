'use strict';
var TestModel = require('../../model/test/test.model').model;

exports.getRecord = function (option, resultData) {
    TestModel
        .findOne({ key: option.key, timestamp: { $lte: new Date(option.timestamp) } })
        .exec(processResult);

    function processResult(err, testSchema) {
        resultData(testSchema);
    }
};

exports.getOneRecord = function (option, resultData) {
    TestModel
        .findOne(option)
        .exec(processResult);

    function processResult(err, testSchema) {
        resultData(testSchema);
    }
};

exports.getDuplicateRecord = function (option, resultData) {
    TestModel.findOne({ key: new RegExp('^' + option.key + '$', "i") }).exec(processResult);

    function processResult(err, testSchema) {
        resultData(testSchema);
    }
};

