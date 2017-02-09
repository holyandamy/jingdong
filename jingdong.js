$(function(){

	//侧边伸缩菜单
	$(".news-right ul li").hover(function(){
		$(this).stop(true,true);
		$(this).animate({width:"100px"},50);
	},function(){
	$(this).animate({width:"34px"},1);
	})

	//返回顶部 （此部分可用#，迅速返回顶部）
	$(".returntop").click(function(){
	   var y=$(window).scrollTop();
	$("html,body").animate({scrollTop:"0px"},1);
	})

	//当滚动轴top大于1000时出现，否则消失
	 $(window).scroll(function(){
		var t=$(this).scrollTop();
		if(t>1000){
	  $(".news-left").css("display","block");
		}
		else{
	   $(".news-left").css("display","none");
		}
	 });

	//当滚动轴top大于500时最顶部搜索区出现，否则消失
	$(window).scroll(function(){
		var t=$(this).scrollTop();
		if(t>500){
	  $(".top-scroll").slideDown(500);
		}
		else{
	      $(".top-scroll").slideUp(200);
		}
	 });
	//轮播左侧的伸缩菜单
	$(".content-left ul li").hover(function(){
	  $(this).find("div").css("display","block");
	},function(){
	$(this).find("div").css("display","none");  
	})
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
	//轮播结束
	//案例展示部分
	$(".section3-md li").hover(function(){
	$(this).find("img").animate({width:"195px",height:"130px"},500);
	},function(){
	$(this).find("img").animate({width:"190px",height:"130px"},500);
	})
	//底部新闻区
	$(".section5-left-md a").hover(function(){
	$(this).find("img").animate({width:"572px",height:"223px"},500);
	},function(){
	$(this).find("img").animate({width:"562px",height:"203px"},500);
	})
})

