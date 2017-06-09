/**
 * Created by Administrator on 2017/5/26.
 */
var express = require('express');
var router = express.Router();


router.get("/",function(req,res,next){
    res.render("main/index")

})
/*
* 登录注册页面渲染
* */
router.get('/user/resigner',function(req,res){
    res.render('main/resigner.html')
})
module.exports = router;


/*
* 产品详情页面
* */
router.get('/product/detail',function(req,res,next){
    res.render("main/detail.html")
})

/*
* 购物车
* */
router.get('/user/cart',function(req,res){
    res.render('main/cart.html')
})

/*
* 地址的添加选择
* */
router.get('/user/address',function(req,res){
    res.render('main/address.html')
})

/*
* 付款成功
* */
router.get('/user/paysuccess',function(req,res){
    res.render('main/success.html')
})