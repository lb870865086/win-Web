/**
 * Created by LiBo on 2017/6/2.
 */
var mongoose = require('mongoose');
var cityData = require('../schemas/data');
module.exports = mongoose.model('data',cityData);
