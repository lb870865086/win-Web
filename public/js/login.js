/**
 * Created by Administrator on 2017/5/27.
 */
/*
* 注册前端验证
*
* */
$(function(){
    /*
    * 统一定义所有需要的表单数据
    * */


    var passWord = $(".passWord").val();
    var rePassword = $(".repeatPassWord").val();
    /*
    * 定义验证正则表示式
    * */
    var reg_num = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    /*匹配 以字母开头，长度在6~18之间，只能包含字符、数字和下划线*/
    var reg_password = /^[a-zA-Z]\w{5,17}$/;

    /*
    * 正则匹配
    * */
$(".tellPhone").blur(function () {
   var tellNum = $(".tellPhone").val();
    if(reg_num.test(tellNum)){
        $(".showMes").eq(0).css({"display":"block"})
        $(".form_control span").eq(0).css({"border":"1px solid #ccc"})
        $(".warn").eq(0).css({"display":"none"}).text("请输入正确的电话号码")
    }else{
    $(".form_control span").eq(0).css({"border":"1px solid red"})
        $(".showMes").eq(0).css({"display":"none"});
        $(".warn").eq(0).css({"display":"block"}).text("请输入正确的电话号码")

        $(".tellNum").val("");
    }
})
    $(".checkform").on("blur",function(){
        var inputVal = $(".checkform").val();
        var checkNum = $(".check").text();
        if(inputVal == checkNum){
            $(".showMes").eq(1).css({"display":"block"})
            $(".form_control span").eq(1).css({"border":"1px solid #ccc"})
            $(".warn").eq(1).css({"display":"none"})
        }else{
            $(".form_control span").eq(1).css({"border":"1px solid red"})
            $(".showMes").eq(1).css({"display":"none"});
            $(".warn").eq(1).css({"display":"block"}).text("验证码错误")


        }
    })
    $(".pass").on("blur",function(){
        var passVal = $(".pass").val();

        if(reg_password.test(passVal)){
            $(".showMes").eq(2).css({"display":"block"})
            $(".form_control span").eq(2).css({"border":"1px solid #ccc"})
            $(".warn").eq(2).css({"display":"none"})
        }else{
            $(".form_control span").eq(2).css({"border":"1px solid red"})
            $(".showMes").eq(2).css({"display":"none"});
            $(".warn").eq(2).css({"display":"block"}).text("密码格式错误")


        }
    })
    $(".repass").on("blur",function(){
        var passVal = $(".pass").val();
        var repassVal = $(".repass").val();


        if(passVal == repassVal){
            $(".showMes").eq(3).css({"display":"block"})
            $(".form_control span").eq(3).css({"border":"1px solid #ccc"})
            $(".warn").eq(3).css({"display":"none"})
        }else{
            $(".form_control span").eq(3).css({"border":"1px solid red"})
            $(".showMes").eq(3).css({"display":"none"});
            $(".warn").eq(3).css({"display":"block"}).text("两次密码输入不一致")


        }
    })



    /*
    *
    * 后台数据的提交
    * */


  $(".submit").on("click",function(){

      $.ajax({
          type:'post',
          dataType:"json",
          data:{
              userName:$('.tellPhone').val(),
              Password:$('.pass').val(),
              rePassword:$(".repass").val()
          },
          url:'/api/user/register',
          success:function(userInfo){
                if(userInfo.code == 2){
                    $(".showMes").eq(0).css({"display":"none"})
                    $(".warn").eq(0).css({"display":"block"}).text(userInfo.message)
                }else if(!userInfo.code){
                    $(".mid_main").css({"display":"none"});
                    $(".resigner_suc").show()

                }

          }
      })
  })

    /*
    * 登陆模块
    * */
$("#login").click(function(){
    $.ajax({
        type:'post',
        dataType:"json",
        data:{
          userName:$("#userName").val(),
          passWord:$("#passWord").val()
        },
        url:'/api/user/login',
        success:function(res){

            if(!res.code){
                $(".showResult").show().text(res.message).css({"color":"#56b00d"});
                setInterval(function(){
                    $(".jump_mask").hide();
                    $(".loginShow").text(res.userInfo.userName);
                    $(".received").text(res.userInfo.userName)
                },1000)

            }else{
                $(".showResult").show().text(res.message).css({"color":"red"}).fadeOut(2000);
                $('#userName').val('');
                $('#passWord').val('')
            }
        }
    })
})

    /*
    * 注册页面登陆入口
    * */
    $(".lg").on("click",function(){
        $(".jump_mask").show();
        $(".login_wrap").slideDown(500)
    })


})