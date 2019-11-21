$(document).ready(function(c) {
	
	$(".inner_nav .inner_nav_mid ul.out li.m ul.sub li").mouseenter(function(){
		$(this).css('background','#014B83');
		$(this).find('a').css('color','#fff');
	})
	$(".inner_nav .inner_nav_mid ul.out li.m ul.sub li").mouseleave(function(){
		$(this).css('background','');
		$(this).find('a').css('color','#535353');
	})
	
	$(document).scroll(function(){
		if($(window).scrollTop() >= 500){
			$('#gotop').css('height','52px');
		}else{
			$('#gotop').css('height','0px');
		}
	})
	
	
	
	
	
	$('.arc_del_dis .arc_info a.size14').click(function(){
		$("#detailCont").css('font-size','14px');
		$("#detailCont").children().css('font-size','14px');
		$("#detailCont").children().css('line-height','150%');
		$("#detailCont span").css('font-size','14px');
		$('.arc_del_dis .arc_info a.size14').css('background','url(/statics/wfyk/images/font_change.jpg) no-repeat left -67px');
			$('.arc_del_dis .arc_info a.size16').css('background','url(/statics/wfyk/images/font_change.jpg) no-repeat left -33px');
		
	})
	$('.arc_del_dis .arc_info a.size16').click(function(){
		$("#detailCont").css('font-size','16px');
		$("#detailCont").children().css('font-size','16px');
		$("#detailCont").children().css('line-height','180%');
			$("#detailCont span").css('font-size','16px');
			$('.arc_del_dis .arc_info a.size14').css('background','url(/statics/wfyk/images/font_change.jpg) no-repeat left -102px');
			$('.arc_del_dis .arc_info a.size16').css('background','url(/statics/wfyk/images/font_change.jpg) no-repeat left 0px');
		
	})
	
	
	
	
});
	
	
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}	
	









