'use strict';
var express = require('express');
var router = express.Router();

var controller = require('./test.controller');

router.get('/get', controller.index);
router.get('/:key', controller.indexbyKey);
router.post('/create', controller.create);
module.exports = router;