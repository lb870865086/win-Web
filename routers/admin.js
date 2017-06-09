/**
 * Created by Administrator on 2017/5/26.
 */
var express = require('express');
var router = express.Router();


router.get("/",function(req,res,next){
    app.send("Hello admin")
})
module.exports = router;