/**
 * Created by Administrator on 2017/5/26.
 */
/*引入express框架*/
var express = require('express');
/*引入swig模板解析引擎*/
var swig = require('swig');
/*引入缓存数据cookies*/
var cookies = require('cookies');
/*引入POST请求解析引擎*/
var bodyParser = require('body-parser');
/*引入数据库*/
var mongoose = require('mongoose');
var app = express();

/*设置静态文件托管*/
app.use('/public',express.static(__dirname+'/public'));
/*配置应用模板*/
app.engine('html',swig.renderFile);
/*设置模板文件存放的目录*/
app.set('views','./views');
/*注册使用的模板引擎*/
app.set('view engine','html');
/*去除模板引擎缓存*/
swig.setDefaults({cache:false});
/*bodyParser设置*/
app.use(bodyParser.urlencoded({extended:false}));



/*根据不同的功能划分不同的模块*/
//后台管理模块
app.use('/admin',require('./routers/admin'));
////根据ajax请求的数据模块
app.use('/api',require('./routers/api'));
//前台展示模块
app.use('/',require('./routers/main'));


/*
* 启动服务器
* */
mongoose.connect('mongodb://localhost:27017/win2',function(err){
    if(err){
        console.log("数据库链接失败")
    }else{
        console.log("数据库链接成功");
        app.listen(8081);
    }

})
