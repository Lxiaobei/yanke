$(function(){
	var W=($(window).width()-466)/2;
	var H=($(window).height()-426)/2;
	$('.ks_show .img1_big .img1_big_pic').css('left',W);
	$('.ks_show .img1_big .img1_big_pic').css('top',H);
	$('.ks_show .img1_big .img1_big_pic').eq(3).css('top','100px');
	$('.ks_show ul li img').click(function(){
		$(this).siblings('.img1_big').show();
		var imgW=$(this).siblings('.img1_big').find('img').width();
		$(this).siblings('.img1_big').find('.img1_big_pic').css('width',imgW+16);
		
	})
	$('.ks_show ul li a').click(function(){
		$('.ks_show ul li').find('.img1_big').hide();
	})
	$('.ks_show .img1_big .img1_big_pic .next_prev .next a').click(function(){
		
		$(this).closest('.img1_big').hide();
		$(this).closest('li').next('li').find('.img1_big').show();
		var imgW=$(this).closest('li').next('li').find('.img1_big img').width();
		$(this).closest('li').next('li').find('.img1_big_pic').css('width',imgW+16);
	})
	
	$('.ks_show .img1_big .img1_big_pic .next_prev .prev a').click(function(){
		$(this).closest('.img1_big').hide();
		$(this).closest('li').prev('li').find('.img1_big').show();
		var imgW=$(this).closest('li').prev('li').find('.img1_big img').width();
		$(this).closest('li').prev('li').find('.img1_big_pic').css('width',imgW+16);
	})
})


$(document).ready(function(){
	$(".inner_nav .inner_nav_mid ul.out li.m ul li").mouseenter(function(){
		$(this).css('background','#014B83');
		$(this).find('a').css('color','#fff');
	})
	$(".inner_nav .inner_nav_mid ul.out li.m ul li").mouseleave(function(){
		$(this).css('background','');
		$(this).find('a').css('color','#535353');
	})
	
})