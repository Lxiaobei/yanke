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
});
	
	
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}	
