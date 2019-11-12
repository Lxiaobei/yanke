document.writeln("<div class=\"inner_banner\"  id=\"inner_banner\" style=\"overflow:hidden\">");
document.writeln("<div class=\"bd\">");
document.writeln("<ul>");
document.writeln("<li>");
// document.writeln("<a target=\"_blank\" href=\"http://pft.zoosnet.net/LR/Chatpre.aspx?id=PFT46114098&lng=cn\">");
document.writeln("<img src=\"./images/bannerzb/01.png\"/>");
document.writeln("</a>");
document.writeln("</li>");
document.writeln("<li>");
// document.writeln("<a target=\"_blank\" href=\"http://pft.zoosnet.net/LR/Chatpre.aspx?id=PFT46114098&lng=cn\">");
document.writeln("<img src=\"./images/bannerzb/02.png\"/>");
document.writeln("</a>");
document.writeln("</li>");


document.writeln("<li>");
// document.writeln("<a target=\"_blank\" href=\"http://pft.zoosnet.net/LR/Chatpre.aspx?id=PFT46114098&lng=cn\">");
document.writeln("<img src=\"./images/bannerzb/03.png\"/>");
document.writeln("</a>");
document.writeln("</li>");
/*document.writeln("<li>");

document.writeln("<a target=\"_blank\" href=\"http://pft.zoosnet.net/LR/Chatpre.aspx?id=PFT46114098&lng=cn\">");

document.writeln("<img src=\"./images/banner/banner_3.jpg\"/>");*/


document.writeln("</a>");
document.writeln("</li>");


document.writeln("</ul>");
document.writeln("</div>");

document.writeln("<div class=\"hd\">");
document.writeln("<ul>");
document.writeln("</ul>");
document.writeln("</div>");
document.writeln("<a class=\"prev\" href=\"javascript:void(0)\"></a>");
document.writeln("<a class=\"next\" href=\"javascript:void(0)\"></a>");
document.writeln("</div>");
document.writeln("<style>");
document.writeln("a.prev{position:absolute;top:45%;left:15%;z-index:999;width:44px;height:69px;background:url(./images/arrow.png) no-repeat -88px top;}");
document.writeln("a.next{position:absolute;top:45%;right:15%;z-index:999;width:44px;height:69px;background:url(./images/arrow.png) no-repeat -132px top;}");
document.writeln("a.prev:hover{background:url(./images/arrow.png) no-repeat left top;}");
document.writeln("a.next:hover{background:url(./images/arrow.png) no-repeat -44px top;}");


document.writeln("</style>");
$(function(){
jQuery(".inner_banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fade", vis:"auto", autoPlay:true, autoPage:true, trigger:"click", interTime:5000 });
})



$(document).ready(function(){

	if($(window).width()<1281){
		$('#inner_banner').css('height','200px');
		$('#inner_banner .bd ul li').css('height','200px');
		$('#inner_banner .bd ul li a').css('height','200px');
	}
	$(window).resize(function(){
		if($(window).width()<=1280){
		$('#inner_banner').css('height','200px');
		$('#inner_banner .bd ul li').css('height','200px');
		$('#inner_banner .bd ul li a').css('height','200px');
	}
	if($(window).width()>1280){
		$('#inner_banner').css('height','450px');
		$('#inner_banner .bd ul li').css('height','450px');
		$('#inner_banner .bd ul li a').css('height','450px');
	}

	})


})