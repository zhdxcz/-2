/*page1*/
var pLine1 = new TimelineLite();
// pLine1.from(".p1_text",1,{opacity:0,ease:Power2.easeIn});
pLine1.from(".p1_big",1,{left:"-200px",top:"100px",opacity:0,ease:Power2.easeIn});
pLine1.from(".p1_small",1,{left:"600px",top:"650px",opacity:0,ease:Power2.easeIn});
var p1guide = TweenMax.from(".p1_guide",1,{top:"700px",opacity:0.5,repeat:-1,yoyo:true,ease:Power2.easeIn});
pLine1.add(p1guide);
pLine1.pause();
/*page2*/
var pLine2 = {
  timer:0,
  repeat:0,
  point_cpu:0,
  point_gpu:0,
  point_mem:0,
  point_disk:0,
  point_total:0,
  play:function(arg){
    if(this.timer){
      this.pause();
    }
    this.timer = setInterval(this.setPoint,100);
    $(".p2_text").hide().fadeIn('slow');
  },
  seek:function(s){
    this.pause();
  },
  pause:function(){
    clearInterval(this.timer);
    pLine2.repeat=0;
  },
  setPoint:function(){
    pLine2.point_cpu = pLine2.getRandom(50000,100000);
    pLine2.point_gpu = pLine2.getRandom(10000,20000);
    pLine2.point_mem = pLine2.getRandom(5000,10000);
    pLine2.point_disk = pLine2.getRandom(5000,10000);
    $("#point_cpu").html(pLine2.point_cpu);
    $("#point_gpu").html(pLine2.point_gpu);
    $("#point_mem").html(pLine2.point_mem);
    $("#point_disk").html(pLine2.point_disk);
    $("#point_total").html(pLine2.point_cpu+pLine2.point_gpu+pLine2.point_mem+pLine2.point_disk);
    pLine2.repeat++;
    if(pLine2.repeat>40){
      pLine2.pause();
    }
  },
  getRandom:function(start,end){
    var c = end-start+1;  
    return Math.floor(Math.random() * c + start);
  }
}
// pLine2.play();
/*page3*/
function setOpacity(elem,tag){
  if(deg % 360 != tag){
    return ;
  }
  TweenLite.fromTo(elem,0.5,{opacity:0,scale:0.1},{opacity:1,scale:1,ease:Power2.easeIn});
}
var pLine3 = new TimelineLite();
var deg = 0;
var p3Timer = TweenMax.to('.p3_rotate', 5, {
    rotation: '+=360',
    repeat: -1,
    ease: Linear.easeNone,
    onUpdate:function(){
      if(deg>250) return ;
      deg++;
      setOpacity(".p3i_01",28);
      setOpacity(".p3i_02",62);
      setOpacity(".p3i_03",97);
      setOpacity(".p3i_04",150);
      setOpacity(".p3i_05",180);
      setOpacity(".p3i_06",210);
    }
});
pLine3.set(".p3_text",{opacity:0}).to(".p3_text",1,{opacity:1,ease:Power2.easeIn});
pLine3.to(".p3_point",3,{opacity:1,ease:Power2.easeIn});
pLine3.add(p3Timer, 1); 
pLine3.pause();
/*page4*/
var pLine4 = new TimelineLite();
pLine4.set(".p4_text",{opacity:0}).to(".p4_text",1,{opacity:1,ease:Power2.easeIn});
var p4Timer = TweenMax.to('.p4_rotate', 5, {
    rotation: '+=360',
    repeat: -1,
    ease: Linear.easeNone
});
pLine4.add(p4Timer, 1); 
var p4h = TweenLite.fromTo(".p4_hours",3,{right:'-300px',opacity:0},{right:'68px',opacity:1,ease:Bounce.easeOut});
pLine4.add(p4h,1);
var p4icon = TweenMax.staggerTo($(".p4_icon"),0.25,{opacity:1,ease:Power2.easeIn},0.5);
pLine4.add(p4icon,1);
pLine4.pause();
/*page5*/
var pLine5 = new TimelineLite();
pLine5.set(".p5_text",{opacity:0}).to(".p5_text",1,{opacity:1,ease:Power2.easeIn});
pLine5.from(".p5_rocket",1,{top:'900px',left:'10px',opacity:0,ease:Power2.easeIn,yoyo:true});
pLine5.pause();
/*end*/

/*showImages*/
function showImages(c){
  var imgs = c.find('img');
  imgs.each(function(){
    if($(this).attr('data-src')){
      $(this).attr('src',$(this).attr('data-src')).removeAttr('data-src');
    }
  })
  return true;
}

/*moveTo*/
var activeIndex = 0;

function moveTo(index) {
    var tIndex = index+1;
    var timeline = window['pLine' + tIndex];
    if(timeline) {
        timeline.seek(0);
        timeline.pause();
        showImages($(".page"+tIndex));
    }
    activeIndex = index;
    if(activeIndex==2){
      deg=0;
      $(".p3_icon").css({opacity:0});
    }
    $('#main_step li').eq(index).addClass('on').siblings().removeClass('on');
    $('.main').animate({top: '-' + winHeight * index}, 500, function(){
        if(timeline)timeline.play();
    });
}
/*resize*/
var winHeight;
function resize(){
  winHeight = $(window).height();
  $('.page_wrap').height(winHeight);
  $('.main').css({top: -winHeight * activeIndex});
  //scale
  var w_scale = $(window).width()/1920,h_scale=$(window).height()/1060;
  var scale = w_scale<h_scale ? w_scale : h_scale;
  if(scale<1){
    TweenLite.to([$('.w1253')], 1, {scale:scale*0.8});
  }else{
    TweenLite.to([$('.w1253')], 1, {scale:1});
  }
}
$(window).resize(resize);
/*loaded*/
$(function(){
  ////init/////
  resize();
  moveTo(activeIndex);
  ////////////
  var fireEvent = true;
  var newDelta, oldDelta, eventTimeout;
  newDelta = oldDelta = eventTimeout = null;
  $('body').mousewheel(function(event, delta) {
    if(!fireEvent) return;
      newDelta = delta;
      if(oldDelta!=null&&oldDelta*newDelta>0){ 
          fireEvent = false;
          clearTimeout(eventTimeout);
          eventTimeout = setTimeout(function(){
              fireEvent = true;
              if($('.wrap').is(':animated')) {
                  return;
              }
              if(delta > 0) {
                  if(activeIndex == 0) return;
                  activeIndex--;
              }else{
                  if(activeIndex == 4) return;
                  activeIndex++;
                  activeIndex = Math.min(activeIndex, 4);
              }
              moveTo(activeIndex);
          }, 300);
      }
      oldDelta = newDelta;
  })
  $('#main_step li').each(function (index) {
      $(this).click(function(){
          activeIndex = index;
          moveTo(index);
      })
  });
  $(".p1_guide").hover(function(){
    p1guide.pause();
  },function(){
    p1guide.play();
  })
  $(".p1_guide").click(function(){
    moveTo(1);
  })
  //endmousewheel
})