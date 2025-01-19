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

//栏目导航
var $nav=$('.nav').find('.li'),
	 $navCur=$('.nav').find('.cur').length?$('.nav').find('.cur').index():0,
	 $navLine=$('.nav_line');
$navLine.css('left',$navCur*$nav.eq(0).width());
var $selected = $('.nav').find('.selected');
$nav.mouseenter(function(){
	$(this).addClass('hover');
	$('.nav').find('.li').removeClass('selected');
	if($(this).index() < 0) {
		var id = $(this).attr('id');
		var idx = id.replace("top", "");
	} else {
		var idx = $(this).index();
	}
	$navLine.stop(1,0).animate({left:idx*$nav.eq(0).width()},200);
	}).mouseleave(function(){
		$(this).removeClass('hover');
		$selected.addClass('selected');
		$navLine.stop(1,0).animate({left:($('.nav').find('.cur').length?$('.nav').find('.cur').index():0)*$nav.eq(0).width()},200)
		});


}
/*
     FILE ARCHIVED ON 07:48:23 Jan 17, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:38:01 Aug 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.743
  exclusion.robots: 0.03
  exclusion.robots.policy: 0.013
  esindex: 0.024
  cdx.remote: 13.108
  LoadShardBlock: 115.301 (3)
  PetaboxLoader3.datanode: 145.289 (5)
  load_resource: 128.863
  PetaboxLoader3.resolve: 52.675
  loaddict: 55.619
*/