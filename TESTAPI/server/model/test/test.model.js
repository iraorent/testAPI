
'use strict';
var mongoose = require('../../config/mongo').mongoose;
var Schema = mongoose.Schema;
var testSchema = new Schema({
    key: {
        type: String
    },    
    value: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

var user = mongoose.model('test', testSchema, 'test');
exports.model = user;

