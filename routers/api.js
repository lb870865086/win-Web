/**
 * Created by Administrator on 2017/5/26.
 */
var express = require('express');
var router = express.Router();
/引入数据库模型/
var User = require('../models/User')

/*
* 定义统一的后端返回数据格式
* */
var responseDate;
router.use(function(req,res,next){
    responseDate = {
        "code":0,
        "message":''
    }
    next()
})
/*
* 注册路由
* */

router.post('/user/register',function(req,res,next){
    var userName = req.body.userName;
    var passWord = req.body.Password;
    var rePassword = req.body.rePassword;
   /*
   * 判断，用户输入的用户名不能为空
   * 判断，用户输入的两次密码必须一致
   * */
    if(userName == ""){
        responseDate.message = '输入的电话号码不能为空';
        responseDate.code = 1;
               res.json( responseDate);
                return
    }
  User.findOne({
      username:userName
  }).then(function(userInfo){
    console.log(userInfo)
      if(userInfo){
          responseDate.message = "用户名已经被注册";
          responseDate.code = 2;
          res.json(responseDate);
          return;
      };
      /*
      * 没有被注册
      * */
      var users = new User({
          username:userName,
          password:passWord
      });
      return users.save();

  }).then(function(newUserInfo){
      responseDate.message = "注册成功";
      res.json(responseDate)
  });
});

/*
* 登录路由
* */

router.post("/user/login",function(req,res,next){
    var passWord = req.body.passWord;

    var userName = req.body.userName;
    if(passWord == '' | userName == ''){
        responseDate.message = "输入的用户用户名或者密码不能为空";
        responseDate.code = 1;
        res.json(responseDate);
        return;
    }
    /*
    * 查询数据库中是否存在输入的数据
    * */
    User.findOne({
        username:userName,
        password:passWord
    }).then(function(userInfo){

        if(!userInfo){
            responseDate.message = "输入的用户名或者密码错误";
            responseDate.code = 2;
            res.json(responseDate);
            return;
        }
        responseDate.message = "恭喜！登陆成功";
        responseDate.userInfo = {
            _id:userInfo._id,
            userName:userInfo.username
        }
        res.json(responseDate)
        return
    })
})
module.exports = router;