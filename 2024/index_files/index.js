var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document

$(function(){
	$(".common").hover(function(){
		$(".common").children(".pull_down").stop(true,true).slideDown(500)
		},function(){
		$(".common").children(".pull_down").stop(true,true).slideUp(500)
		})
		
		
})
$(function(){
	$(".common2").hover(function(){
		$(".common2").children(".pull_down").stop(true,true).slideDown(500)
		},function(){
		$(".common2").children(".pull_down").stop(true,true).slideUp(500)
		})
		
		
})
$(function(){
	$("#classification .fenlei ul li:has(div)").hover(function(){
		$(this).children("div").stop(true,true).slideDown(300)
		},function(){
		$(this).children("div").stop(true,true).slideUp(300)
		})
		
})
$(function (){
	$("#classification .fenlei ul li").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(this).addClass("hover")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$("#classification .fenlei ul li").removeClass("hover")//先删除所有的a的样式hover
		})
	})
})
/*
$(function (){
	$(".pull_down ul li").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(".flipmenu .flipmenu_link:eq("+index+")").css("top","-20px")//给对应的a添加样式hover
			$(".flipmenu .flipmenu_link_over:eq("+index+")").css("top","0")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".flipmenu .flipmenu_link:eq("+index+")").css("top","0")//给对应的a添加样式hover
			$(".flipmenu .flipmenu_link_over:eq("+index+")").css("top","-20px")//给对应的a添加样式hove
		})
	})
})
*/

$(function(){
	$(".case_class_a_list ul li:has(div)").hover(function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "50"}, 100);
		},function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "-180"}, 100);
		})
		
		
})
$(function(){
	$(".case_class_a_list2 ul .li2:has(div)").hover(function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "0"}, 200);
		},function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "-190"}, 100);
		})
		
		
})

$(function(){
	$(".right_contact_img ul li:has(div)").hover(function(){
		$(this).children(".pull_down2").stop(true,true).animate({"right": "0"}, 300);
		},function(){
		$(this).children(".pull_down2").stop(true,true).animate({"right": "-201"}, 300);
		})
		
		
})
$(function(){
	$("#container_case .case_one:has(div)").hover(function(){
		$(this).children(".caselogo").stop(true,true).animate({"top": "0"}, 300);
		},function(){
		$(this).children(".caselogo").stop(true,true).animate({"top": "-180"}, 300);
		})
		
		
})


$(function (){
	$(".nav ul .xia").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(this).addClass("hover")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".nav ul .xia").removeClass("hover")//先删除所有的a的样式hover
		})
	})
})

/*$(function(){
	$(".next").click(function (){
		$(".banner ul li:first").animate({"margin-left":"-580"},1000,function(){
		$(".banner ul li:first").clone().appendTo(".banner ul")
		$(".banner ul li:first").remove()
		$(".banner ul li:last").css("margin-left","0")
	})
	})//next 按钮
	$(".up").click(function (){
		$(".banner ul li:last").animate({"margin-left":"-580"},0,function(){
		$(".banner ul li:last").clone().prependTo(".banner ul")
		$(".banner ul li:last").remove()
		$(".banner ul li:first").animate({"margin-left":"0"},1000)
	})
	})//next 按钮
})*/


$(document).ready(function(){
	var move=$('#tbNav');
		
	var window_w = $(window).width();
	
	if(window_w>1000){move.show();}

$('#tbNavLi1').click( function () {$('html,body').animate({scrollTop: $('#num1').offset().top - 30 + 'px'},'slow');});
$('#tbNavLi2').click( function () {$('html,body').animate({scrollTop: $('#num2').offset().top - 30 + 'px'},'slow');});
$('#tbNavLi3').click( function () {$('html,body').animate({scrollTop: $('#num3').offset().top - 30 + 'px'},'slow');});
$('#tbNavLi4').click( function () {$('html,body').animate({scrollTop: $('#num4').offset().top - 30 + 'px'},'slow');});
$('#tbNavLi5').click( function () {$('html,body').animate({scrollTop: $('#num5').offset().top - 30 + 'px'},'slow');});
$('#tbNavLi6').click( function () {$('html,body').animate({scrollTop: $('#num6').offset().top - 30 + 'px'},'slow');});
$('#tbNavLi7').click( function () {$('html,body').animate({scrollTop: $('#num7').offset().top - 30 + 'px'},'slow');});
$('#tbNavLi8').click( function () {$('html,body').animate({scrollTop: $('#num8').offset().top - 30 + 'px'},'slow');});
		
});


$(function (){
	$(".case_class_a_list .pull_down2").each(function(index){//each变例，每一个a标签
		$(this).mousedown(function(){//鼠标滑过a的时候式
			$("#container_case .fe:eq("+index+")").animate({"min-height": "260px"}, 300)
			$("#container_case .fe:eq("+index+")").css("display","table")//给对应的a添加样式hover
		})
	})
})
$(function (){
	$(".entire .huadong ").click(function(){
		$(".entire .quancheng").animate({"width": "15%"}, 500)
		$(".entire .quancheng").css("cursor","pointer")
		$(".entire .yitihua").animate({"width": "85%"}, 500)
		$(".entire .huadong").css("cursor","default")
		$(".entire .flip").animate({"opacity": "0"}, 500)
		$(".entire .quancheng .jiantou").animate({"opacity": "1"}, 500)
		$(".entire .yitihua .jiantou").animate({"opacity": "0"}, 500)
	})
	$(".entire .quancheng ").click(function(){
		$(".entire .yitihua").animate({"width": "15%"}, 500)
		$(".entire .huadong").css("cursor","pointer")
		$(".entire .quancheng").animate({"width": "85%"}, 500)
		$(".entire .quancheng").css("cursor","default")
		$(".entire .flip").animate({"opacity": "1"}, 500)
		$(".entire .yitiMain").animate({"opacity": "0"}, 500)
		$(".entire .quancheng .jiantou").animate({"opacity": "0"}, 500)
		$(".entire .yitihua .jiantou").animate({"opacity": "1"}, 500)
	})
})


$(function (){
	$(".entire .yitihua .hua .yitiMain .d1").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(".entire .yitihua .hua .yitiMain .d1:eq("+index+")").stop().animate({"margin-top": "-10px"}, 200)
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".entire .yitihua .hua .yitiMain .d1:eq("+index+")").stop().animate({"margin-top": "0"}, 300)
		})
	})
})


$(function (){
	$(".data .row1_2").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(".data .row1_2:eq("+index+")").stop().css("z-index","12")
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".data .row1 .row1_2").stop().css("z-index","10")
			$(".data .row2 .row1_2").stop().css("z-index","9")
			$(".data .row3 .row1_2").stop().css("z-index","8")
		})
	})
})

$(function (){
	$("#container_case3 ul li dl dd").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$("#container_case3 ul li dl dd:eq("+index+")").stop().animate({"top": "80px"}, 200)
		},function(){
			$("#container_case3 ul li dl dd:eq("+index+")").stop().animate({"top": "239px"}, 200)
		})
	})
})


$(function (){
	$("#container_case3 ul li").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$("#container_case3 ul li:eq("+index+")").stop().css("z-index","2")
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$("#container_case3 ul li:eq("+index+")").stop().css("z-index","1")
		})
	})
})


$(function (){
	$(".xuqiu2 .centent .tijiao ul .hover1 input").each(function(index){//each变例，每一个a标签
		$(this).focus(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .hover1:eq("+index+")").addClass("hover")
		})
		$(this).blur(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .hover1:eq("+index+")").removeClass("hover")
		})
	})
})
$(function (){
	$(".xuqiu2 .centent .tijiao ul .miaoshu textarea").each(function(index){//each变例，每一个a标签
		$(this).focus(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .miaoshu:eq("+index+")").addClass("hover2")
		})
		$(this).blur(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .miaoshu:eq("+index+")").removeClass("hover2")
		})
	})
})

$(function (){
	$(".jbcontent dl").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$(".jbcontent dl dd:eq("+index+")").stop().animate({"right": "272px"}, 200)
		},function(){
			$(".jbcontent dl dd:eq("+index+")").stop().animate({"right": "-552px"}, 200)
		})
	})
})


$(function (){
	$("#index_main .bannerMain .leftBanner .leftTop dl dd").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$("#index_main .bannerMain .leftBanner .leftTop dl dd:eq("+index+")").stop().animate({"top": "80px"}, 200)
		},function(){
			$("#index_main .bannerMain .leftBanner .leftTop dl dd:eq("+index+")").stop().animate({"top": "152px"}, 200)
		})
	})
})
$(function (){
	$("#index_main .bannerMain .leftBanner .leftBottom .zhanku dl dt").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$("#index_main .bannerMain .leftBanner .leftBottom .zhanku dl dt span:eq("+index+")").stop().animate({"bottom": "0"}, 200)
		},function(){
			$("#index_main .bannerMain .leftBanner .leftBottom .zhanku dl dt span:eq("+index+")").stop().animate({"bottom": "-35px"}, 200)
		})
	})
})


$(function(){
	
	setInterval(function(){$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:first").animate({"margin-left":"-300"},1000,function(){
		$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:first").clone().appendTo("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul")
		$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:first").remove()
		$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:last").css("margin-left","0")
	})},3000)
})
$(function (){
	$(".ser_02 ul li").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$(".ser_02 ul li img:eq("+index+")").stop().animate({"top": "0px"}, 200)
		},function(){
			$(".ser_02 ul li img:eq("+index+")").stop().animate({"top": "10px"}, 100)
		})
	})
})

}
/*
     FILE ARCHIVED ON 05:27:04 Jan 17, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:38:03 Aug 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.579
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 6.412
  LoadShardBlock: 115.543 (3)
  PetaboxLoader3.datanode: 165.402 (5)
  load_resource: 168.537
  PetaboxLoader3.resolve: 76.54
  loaddict: 67.741
*/