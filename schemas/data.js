/**
 * Created by LiBo on 2017/6/2.
 */
var mongoose = require('mongoose');
//定义用户的表结构
module.exports =  mongoose.Schema({
   //省份数据
    id:Number,
    code:Number,
    name:String,
    cityCode:Number

});
