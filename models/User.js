/**
 * Created by Administrator on 2017/5/27.
 */
var mongoose = require('mongoose');
var schemas = require('../schemas/user');
module.exports = mongoose.model('User',schemas);
