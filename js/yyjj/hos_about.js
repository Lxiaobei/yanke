$(function(){
	
	var W=($(window).width()-1080)/2;
	var H=($(window).height()-810)/2;
	$('#jttj .img1_big .img1_big_pic').css('left',W);
	$('#jttj .img1_big .img1_big_pic').css('top',H);
	$('#jttj .yygkp1_li img').click(function(){
		
		
		$(this).siblings('.img1_big').show();
		var imgW=$(this).siblings('.img1_big').find('img').width();
		$(this).siblings('.img1_big').find('.img1_big_pic').css('width',imgW+16);
		
	})
	$('#jttj .yygkp1_li .close_all').click(function(){
		$('#jttj .yygkp1_li').find('.img1_big').hide();
	})
	
	$('#jttj .img1_big .img1_big_pic .next_prev .next a').click(function(){
		
		
		$(this).closest('.img1_big').hide();
		$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big').show();
		var imgW=$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big img').width();
		$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big_pic').css('width',imgW+16);
	})
	
	$('#jttj .img1_big .img1_big_pic .next_prev .prev a').click(function(){
		$(this).closest('.img1_big').hide();
		$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big').show();
		var imgW=$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big img').width();
		$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big_pic').css('width',imgW+16);
	})
	
	$('#jtry .img1_big .img1_big_pic').css('left',W);
	$('#jtry .img1_big .img1_big_pic').css('top',H);
	$('#jtry .img1_big .img1_big_pic').eq(1).css('top','30px');
	$('#jtry .yygkp1_li img').click(function(){
		$(this).siblings('.img1_big').show();
		var imgW=$(this).siblings('.img1_big').find('img').width();
		$(this).siblings('.img1_big').find('.img1_big_pic').css('width',imgW+16);
		
	})
	$('#jtry .yygkp1_li .close_all').click(function(){
		$('#jtry .yygkp1_li').find('.img1_big').hide();
	})
	
	$('#jtry .img1_big .img1_big_pic .next_prev .next a').click(function(){
		$(this).closest('.img1_big').hide();
		$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big').show();
		var imgW=$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big img').width();
		$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big_pic').css('width',imgW+16);
	})
	
	$('#jtry .img1_big .img1_big_pic .next_prev .prev a').click(function(){
		$(this).closest('.img1_big').hide();
		$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big').show();
		var imgW=$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big img').width();
		$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big_pic').css('width',imgW+16);
	})
	
	
	
	$('#jtax .img1_big .img1_big_pic').css('left',W);
	$('#jtax .img1_big .img1_big_pic').css('top',H);
	$('#jtax .yygkp1_li img').click(function(){
		$(this).siblings('.img1_big').show();
		var imgW=$(this).siblings('.img1_big').find('img').width();
		$(this).siblings('.img1_big').find('.img1_big_pic').css('width',imgW+16);
		
	})
	$('#jtax .yygkp1_li .close_all').click(function(){
		$('#jtax .yygkp1_li').find('.img1_big').hide();
	})
	
	$('#jtax .img1_big .img1_big_pic .next_prev .next a').click(function(){
		$(this).closest('.img1_big').hide();
		$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big').show();
		var imgW=$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big img').width();
		$(this).closest('div.yygkp1_li').next('div.yygkp1_li').find('.img1_big_pic').css('width',imgW+16);
	})
	
	$('#jtax .img1_big .img1_big_pic .next_prev .prev a').click(function(){
		$(this).closest('.img1_big').hide();
		$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big').show();
		var imgW=$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big img').width();
		$(this).closest('div.yygkp1_li').prev('div.yygkp1_li').find('.img1_big_pic').css('width',imgW+16);
	})
	
	
	
	
})