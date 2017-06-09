/**
 * Created by LiBo on 2017/6/4.
 */
/*
* selector表示选择器，选择需要变化的父级元素
* mainChange表示变化的内容
* BigImg是针对放大镜效果中放大图片的对应展示
* */


;(function($){
    $.fn.changeTab = function(obj){
       var a = {
            "selector":".tab_Left ul li",
           "mainChange":".main_left",
       };
        var b = $.extend(a,obj);
        $(b.selector).on("mouseover",function(){
            $(this).css({"background":"#fff"}).siblings().css({"background":"rgb(249,249,249)"})
            var _index  = $(this).index();
            $(b.mainChange).eq(_index).show().siblings().hide()
            $(b.BigImg).eq(_index).show().siblings().hide();
            $(this).addClass("focus").siblings().removeClass("focus");
        })
    }
})(jQuery);