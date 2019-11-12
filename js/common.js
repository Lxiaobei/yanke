$(function(){
	if($('.hot_arc .hot_arc_item img').length==0){
		$('.hot_arc .hot_arc_item').hide();
	}
	
})

$(document).ready(function(){
	var ah=$(document).height();
	
	$(".big_ewm").css('height',ah);
	
	$(".big_ewm .ewm_con .close a").click(function(){
		$(".big_ewm").hide();
	})
	$(".other_op dl").eq(1).click(function(){
		$(".big_ewm").show();
		var ww=$(window).width();
		var wh=$(window).height();
		var getw=(ww-200)/2;
		var geth=(wh-258)/2;
		$(".big_ewm .ewm_con").css('left',getw);
		$(".big_ewm .ewm_con").css('top',geth);
	})
})


$(document).ready(function(){
	var ww=$(document).width();
	if(ww<1100){
		return false;
	}
	var i=50;
	if(isFirefox=navigator.userAgent.indexOf("Firefox")<=0){
		
		
		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") 
{ 
i=60;
} 
else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") 
{ 
i=50;
} 
else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") 
{ 
i=60; 
} 
else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") 
{ 
i=60; 
}
else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE10.0") 
{ 
i=60; 
}
	}else{
		i=50;
	}


	var right=(ww-1000)/2-i;
	
	var windowH=$(window).height();
	if(windowH<712){
		$('#new_rightDiv1').css('top','487px');
	}
	
	$('#new_rightDiv1').css('right',right);
	
	$(window).resize(function(){
		
		var ww1=$(document).width();
		if(ww1<1100){
			$('#new_rightDiv1').hide();
		}else{
			$('#new_rightDiv1').show();
		}
	var right=(ww1-1000)/2-i;
		$('#new_rightDiv1').css('right',right);
	})
	
	
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		if(top>300){
			$('#new_rightDiv1 ul li.go_top').slideDown();
		}
		if(top<=300){
			$('#new_rightDiv1 ul li.go_top').slideUp();
		}
			
	})
	
	$('#new_rightDiv1 ul li').eq(1).mouseenter(function() {
            $(this).find(".son_k").fadeIn("fast")
        });
        $('#new_rightDiv1 ul li').eq(1).mouseleave(function() {
            $(this).find(".son_k").fadeOut("fast")
        });
		$('#new_rightDiv1 ul li').eq(2).mouseenter(function() {
            $(this).find(".son_tel").fadeIn("fast")
        });
        $('#new_rightDiv1 ul li').eq(2).mouseleave(function() {
            $(this).find(".son_tel").fadeOut("fast")
        });
	$('#new_rightDiv1 ul li.go_top').click(function() {
            $("html, body").animate({
                "scroll-top": 0
            },
            "fast")
        })
		
		
		
})