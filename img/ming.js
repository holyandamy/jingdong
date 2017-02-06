$(function(){
//轮播图开始2016 12-1  10:24

//初始化
var interval,
    currentIndex=0,
    hasStarted=false,
    t=3000;
    lth=$(".d1a").length;
//仅第一张图片显示及下标激活状态
$(".d1a:not(:first)").hide;
$(".d2 ul li:first").addClass("d2_selected");
// 开始轮播
function start(){
  if(!hasStarted){
   hasStarted=true;
   interval=setInterval(next,t);
 }
}
start();
//停止轮播
function stopCircle(){
clearInterval(interval);
   hasStarted=false;
}
//图片轮播及下标跟随
$(".d2 ul li").hover(function(e){
 stopCircle();
 $(".d1a").stop(true,true);
 var preIndex=$(".d2 ul li").filter(".d2_selected").index();
 currentIndex=$(this).index();
 play(preIndex,currentIndex);
},function(){start();})
//向前向后部分
function pre(){
 var preIndex=currentIndex;
 currentIndex=(--currentIndex+lth) % lth;
 play(preIndex,currentIndex);
}
function next(){
 var nextIndex=currentIndex;
 currentIndex=++currentIndex % lth;
play(nextIndex,currentIndex);
}
 //play部分
 function play(preIndex,currentIndex){
$(".d1a").eq(preIndex).fadeOut(500)
 .parent().children().eq(currentIndex).fadeIn(500);
 $(".d2 ul li").removeClass("d2_selected");
 $(".d2 ul li").eq(currentIndex).addClass("d2_selected");
 }

//向前向后按钮隐藏及hover事件
$(".page").hide();
$(".lunbo").hover(
function(){
stopCircle();
$(".page").show();
},function(){
$(".page").hide();
start();
})

//向前向后按钮事件绑定
$(".pre").unbind("click");
$(".pre").bind("click",function(){
pre();
});
$(".next").unbind("click");
$(".next").bind("click",function(){
next();
});


//轮播图结束2016 12-1 11:03

//轮播结束

//轮播底下淡出
// $(".content1 li a").hover(function(){
// $(this).siblings().animate({height:"200px",width:"200px"},500);
// },function(){
// $(this).siblings().animate({height:"0px",width:"200px"},500);
// });

$(".content1 li").mouseenter(function(){
$(this).find("div").slideDown(200);

})
$(".content1 li").mouseout(function(){
$(this).find("div").slideUp(200);

})






//案例展示部分
$(".section3-md li").hover(function(){
$(this).find("img").animate({width:"210px",height:"170px"},500);
},function(){
$(this).find("img").animate({width:"200px",height:"150px"},500);
})
















//底部新闻区
$(".section5-left-md a").hover(function(){
$(this).find("img").animate({width:"572px",height:"223px"},500);
},function(){
$(this).find("img").animate({width:"562px",height:"203px"},500);
})

})

