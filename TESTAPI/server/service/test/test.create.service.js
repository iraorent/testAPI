'use strict';
var TestModel = require('../../model/test/test.model').model;
var mongoose = require('mongoose');
var TestService = require('./');

exports.createRecord = function (payLoad, resultData) {
    var response = {};

    try {
        var isValid = true;
        //Check for unique key
        var option = { key: payLoad.key };
        TestService.read.getDuplicateRecord(option, processUniqueValidationForTest);
    }
    catch (err) {
        console.error(err);
    }

    var returnObj = {};
    function processUniqueValidationForTest(result) {
        if (result !== null) {

            var obj = {};
            obj._id = result._id;
            obj.key = result.key;
            obj.value = payLoad.value;
            obj.timestamp = new Date();
            returnObj = obj; 
            TestModel.update({ _id: obj._id }, { $set: obj }, processMessage);
        }
        else {
            var obj = {};
            obj.key = payLoad.key;
            obj.value = payLoad.value;
            obj.timestamp = new Date();
            returnObj = obj; 

            var test = new TestModel(obj);
            test.save(processMessage);
        }
    }

    function processMessage(err) {
        {
            if (!err) {
                response.statusHttp = 200;
                response.statusBool = true;
                response.message = "Transaction Complete.";
                response.data = { "key": returnObj.key, "value": returnObj.value, "timestamp": returnObj.timestamp };
            } else {
                if (response.statusHttp === undefined || response.statusHttp.length === 0) {
                    response.statusHttp = 500;
                    response.statusBool = false;
                }

                if (response.message === undefined || response.message.length === 0) {
                    response.message = "Error while processing data.";
                    response.rawError = err;
                }
            }
            resultData(response);
        }
    }
};
