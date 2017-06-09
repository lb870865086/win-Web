/**
 * Created by Administrator on 2017/5/27.
 */
/**/
var mongoose = require('mongoose');
//定义用户的表结构
module.exports =  mongoose.Schema({
    //用户名
    username:String,
    //m密码
    password:String
});
