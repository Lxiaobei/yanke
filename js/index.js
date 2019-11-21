$(document).ready(function(c) {
	
	$('.nav .nav_mid .navCategoryMenu h2').mouseenter(function(){
		$('#ro').css('background','url(/statics/wfyk/images/menu_arrow.png) no-repeat left -128px');
		$('.nav .nav_mid .navCategoryMenu ul.categoryBox').stop().animate({height:"450px"});
	})
	
	$('.nav .nav_mid .navCategoryMenu ul.categoryBox').mouseenter(function(){
		$('.nav .nav_mid .navCategoryMenu ul.categoryBox').stop().animate({height:"450px"});
	})
	
	$('.nav .nav_mid').mouseleave(function(){
		$('#ro').css('background','url(/statics/wfyk/images/menu_arrow.png) no-repeat left 0px');
		$('.nav .nav_mid .navCategoryMenu ul.categoryBox').stop().animate({height:"0px"});
	})
	$('.nav ul.navList li').mouseenter(function(){
		$('#ro').css('background','url(/statics/wfyk/images/menu_arrow.png) no-repeat left 0px');
		$('.nav .nav_mid .navCategoryMenu ul.categoryBox').stop().animate({height:"0px"});
	})
    $(".categoryBox li").mouseenter(function() {
        
        var e = $(this).parents(".navCategoryMenu");
        var h = $(".categoryBox li").index($(this));
        $(this).addClass("on");
        e.find(".menuBox").hide();
        e.find(".menuBox").eq(h).show();
        
    });
    $(".categoryBox li").mouseleave(function(g) {
        
        $(this).removeClass("on");
        $(".menuBox").hide();
    });
    $(".menuBox").mouseenter(function(h) {
        var g = $(".menuBox").index($(this));
        $(this).show();
        
        $(".categoryBox li").eq(g).addClass("on");
    });
    $(".menuBox").mouseleave(function(g) {
        
        $(".categoryBox li").removeClass("on");
        $(this).hide();
    });
	
	
	$(".our_doctors .our_doctors_mid .doc_dis ul li").mouseenter(function(){
		$(this).find(".black_bg").show();
		$(this).find(".jia").show();
		$(this).find(".user_opt").stop().animate({bottom:'0px'});
		$(this).find(".doc_info").css('height','121px').css('border-bottom','2px solid #903645');
	})
	
	$(".our_doctors .our_doctors_mid .doc_dis ul li").mouseleave(function(){
		$(this).find(".black_bg").hide();
		$(this).find(".jia").hide();
		$(this).find(".user_opt").stop().animate({bottom:'-40px'});
		$(this).find(".doc_info").css('height','122px').css('border-bottom','1px solid #ededed');
	})
	
	
	
	var ah=$(document).height();
	
	$(".big_ewm").css('height',ah);
	
	$(".big_ewm .ewm_con .close a").click(function(){
		$(".big_ewm").hide();
	})
	$(".news_info .news_info_mid .right .other_op dl").eq(1).click(function(){
		$(".big_ewm").show();
		var ww=$(window).width();
		var wh=$(window).height();
		var getw=(ww-200)/2;
		var geth=(wh-258)/2;
		$(".big_ewm .ewm_con").css('left',getw);
		$(".big_ewm .ewm_con").css('top',geth);
	})

	
	
	$(".nav .nav_mid ul.navList li.m ul li").mouseenter(function(){
		$(this).css('background','#014B83');
		$(this).find('a').css('color','#fff');
	})
	$(".nav .nav_mid ul.navList li.m ul li").mouseleave(function(){
		$(this).css('background','');
		$(this).find('a').css('color','#535353');
	})
	
	$("#LRdiv1").bind('DOMNodeInserted',function(e){
		$(this).hide();
	})
	
	
});

$(function(){
	if($(window).width()<1441){
		$('#full').css('height','300px');
		$('#full .bd ul li').css('height','300px');
		$('#full .bd ul li a').css('height','300px');
	}
	$(window).resize(function(){
		if($(window).width()<=1441){
		$('#full').css('height','300px');
		$('#full .bd ul li').css('height','300px');
		$('#full .bd ul li a').css('height','300px');
	}
	if($(window).width()>1441){
		$('#full').css('height','450px');
		$('#full .bd ul li').css('height','450px');
		$('#full .bd ul li a').css('height','450px');
	}
	})
})








