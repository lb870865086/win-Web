/**
 * Created by Administrator on 2017/5/23.
 */
$(function(){

    /*
     * 鼠标移入右侧slide_nav，detail显示
     * */

    $(".icons_wrap1").hover(function () {
       $(".detail1").show()
    },function(){
        $(".detail1").hide()
    })

    $(".icons_wrap2").hover(function(){
        $(".detail2").show()
    },function(){
        $(".detail2").hide()
    })
    $(".icons_wrap5").hover(function(){
        $(".detail5").show()
    },function(){
        $(".detail5").hide()
    })
    $(".icons_wrap6").hover(function(){
        $(".detail6").show()
    },function(){
        $(".detail6").hide()
    })


/*
*
* 菜单导航栏的鼠标移入移除效果。避免伪类hover造成我的浏览器兼容问题
* */
    $("ul li").hover(function(){
        if($(this).hasClass("li1")){
            $(this).css({"background":"#fff","display":"block"});
        }else if($(this).hasClass("li7")){
            $(this).css({"background":"#fff","display":"block"});
        }else if($(this).hasClass("li8")){
            $(this).css({"background":"#fff","display":"block"});
        }
    },function(){
        $(this).css({"background":"","display":"block"});
    })


    /*
    * 轮播图片
    *
    * */




    //自动播放定时器
    function autoPlay(){
        var cleartime;
        var _index = 0;
        cleartime = setInterval(function(){
            _index++;

            if(_index>=$(".img_wrap li").length){
                _index = 0;
            }
            $(".img_wrap li ").eq(_index).fadeIn(300).siblings().fadeOut();

            $(".img_ctr a").eq(_index).stop().addClass("active").stop().siblings().removeClass("active")

        },3000)

    }
    autoPlay()


    /*
    * 右侧小轮播图
    * */

function sidePlay(){
    var showImg;
    var index = 0;
    showImg = setInterval(function(){
        index++;
        if(index>$(".slides li").length){
            index = 0;
        }
        $(".slides li").eq(index).fadeIn(300).siblings().fadeOut();
    },2000)
}
    sidePlay()


    //幻灯片播放主程序

//自动循环播放函数


    //控制按钮移入，播放停止。移除，自动播放开始
    //$(".img_ctr").find("a").hover(function(){
    //  _index = $(this).index()
    //    $(".img_wrap").find("a").eq(_index).stop().fadeIn(1000).siblings().fadeOut(1000);
    //
    //    $(".img_ctr a").eq(_index).stop().addClass("active").stop().siblings().removeClass("active")
    //},function(){
    //  autoPlay()
    //})


    /*鼠标移入图片，
    停止自动轮播*/
    $(".img_wrap a").hover(function(){

        clearInterval(cleartime)

    },function(){
        autoPlay()
    })

/*
* Ajax实现搜索框功能
*
    http://list.jiuxian.com/assKeyWords.htm?t=1495602758849&callback？
        */

$("#wd").blur(function(){
  $.ajax({
      type:'POST',
      dataType:'JSON',
      url:'http://list.jiuxian.com/assKeyWords.htm?t=1495623381696&callback',
      success:function(res){

      }
  })
})


    /*
    * 左侧导航
    * */
    $(".categoryBox li").on("mouseover",function() {
        $(this).css({"background": '#e8e9e9'});
    })

    /*
    * 左侧鼠标移入显示
    * */

$(".categoryBox").find("li").hover(function(){
    var _index = $(this).index();
    /*
    * 控制多级导航中间显示部分的宽度
    * */
    if(_index == 0 ||_index == 2 || _index == 3){
        $(".list_wrap").css({"width":"400px"})
    }else{
        $(".list_wrap").css({"width":"100%"})
    }
    $('.mask').show()
    $(".mask").hover(function(){
       $(this).show()
    },function(){
        $(this).hide()
    })
    $(".slide_show").eq(_index).show().siblings().hide()
},function(){
    $('.mask').hide()
})

    /*
    * 注册页面帮助中心下拉菜单
    * */
    $(".helpCen").hover(function(){
        $(".slide_detail").show();
        $(".slide_detail ").hover(function () {
            $(this).show();
        },function(){
            $(this).hide()
        })
    },function(){


    })

    /*
    * 登录注册功能实现
    * */
    $(".login").on("click",function showLogin(){
        $(".jump_mask").show();
        $(".login_wrap").slideDown(500)
    })


    /*
    *验证码随机
    * */
$(".check").on("click",function changeCheck () {
    var _this = $(this)
    var str = '';
    var str1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(var i = 0;i<4;i++){
        str+=str1 [ Math.floor(Math.random()*str1.length ) ]
        _this.text(str)
    }
})
    /*
    * 鼠标移入放大图层显示，获取放大区域
    * */
    $(".smallImg ").mousemove(function(e){

        $(".moveMask").show();
        $(".bigImg").show();
        var L = e.pageX;
        var T = e.pageY;
        //求得小图到浏览器左边的的距离
        var l =Math.floor( $(this).offset().left );
        //求得小图到浏览器上边的距离
        var t = Math.floor($(this).offset().top );
        //上边界
        var top = T - t -100;
        //左边界
        var left = L - l - 100;

        //左边不能超出设定的基线
        left = left<0?0:left;
        //上边不能超出设定的基线
        top = top<0?0:top;
        //下边也不能超出设定的边届
        top  = top>240?240:top;
        //右边不能超出设定的边界
        left = left>242?242:left;
        //指定中间的浮动小方块的坐标

        $(".moveMask").css({"top":top,"left":left})
        $(".bigImg li img").css({top:-top,left:-left})
    }).mouseout(function(){
        $(".moveMask").hide();
        $(".bigImg").hide();
    });

    /*
    * 产品详情页倒计时效果
    * */
var changeTime;
    changeTime = setInterval(function(){

        var time_start = new Date().getTime(); //设定当前时间

        var time_end =  new Date("2017/6/10 00:00:00").getTime(); //设定目标时间
        // 计算时间差
        var time_distance = time_end - time_start;
        // 天
        var int_day = Math.floor(time_distance/86400000)
        time_distance -= int_day * 86400000;

        // 时
        var int_hour = Math.floor(time_distance/3600000)
        time_distance -= int_hour * 3600000;
        // 分
        var int_minute = Math.floor(time_distance/60000)
        time_distance -= int_minute * 60000;

        // 秒
        var int_second = Math.floor(time_distance/1000)
        // 时分秒为单数时、前面加零
        if(int_day < 10){
            int_day =" 0"+int_day;
        }else if(int_day == 0){
            clearInterval(changeTime);
        }
        if(int_hour < 10){
            int_hour = "0" + int_hour;
        }
        if(int_minute < 10){
            int_minute = "0" + int_minute;
        }
        if(int_second < 10){
            int_second = "0" + int_second;
        }
        // 显示时间
        $(".day").text(int_day);
        $(".hours").text(int_hour);
        $(".minutes").text(int_minute);
        $(".seconds").text(int_second);
    },1000);


    /*
    * 地址的选配
    * */

$(".address_detail").on("click",function(e){
    e.stopImmediatePropagation()
   $(".address").show();
    $(this).css({"border-bottom":"none" ,"background":"#fff"})

})
    $(".provence").click(function(e){
        e.stopImmediatePropagation()
        $(".provence_list").show();
        $(".address").show()


        for(var j = 0;j<data.length;j++){
            $(".provence_list").append("<a>"+data[j]+"</a>")
        }


    })


    //省市二级联动
$(".provence_list a").click(function(e){
    e.stopImmediatePropagation()
    $(".city").addClass("active").siblings().removeClass("active");
    $(".address_city").show();
    $(".list2").show();

    var val = $(this).text();
    $(".ch_provence").text(val)
    $(".list2").empty()
    for(var i = 0;i<data[val].length;i++){
        $(".list2").append("<a href='javascript:;' class='cities'>"+data[val][i]+"</a>")
    }
});
    //三级联动
    $(".cities").click(function(e){

       alert($(this).val())
    })
    $(document).on("click",function(){
        $(".address").hide()
        $(".address_city").hide()
        $(".address_detail").css({"border-bottom":"1px solid #8c8c8c" })
    })


    /*
    * 加入购物车数量
    * */
    var counts = 0;
    $(".fr_add").on("click",function(){
        counts++;
        $(".fl_num").text(counts)
    })
    $(".fr_remove").on("click",function(){
        if(counts<=0){
            counts = 0;
        }else{
            counts--;
        }
        $(".fl_num").text(counts)
    })


    /*
    * 购物车模态框的显示隐藏
    * */
    $(".del").on("click",function(){


    })
        });

