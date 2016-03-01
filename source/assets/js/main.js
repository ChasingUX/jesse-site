var tl = new TimelineLite({delay:0.3});
var tlB = new TimelineLite();

 var $cover = $(".Cover"),
  $header = $('.Header-nav'),
  $nav = $header.find('li'),
  $registration = $header.find('.Registration'),
  $leftCross = $header.find('.Cross--left'),
  $rightCross = $header.find('.Cross--right'),
  $topLeft = $(".tl"),
  $topMiddle = $(".tm"),
  $topRight = $(".tr"),
  $MiddleRight = $(".rm"),
  $BottomRight = $(".rb"),
  $BottomMiddle = $(".mb"),
  $BottomLeft = $(".lb"),
  $MiddleLeft = $(".ml"),
  $fade = $('.Fade'),
  $linkBox = $('.Link--box');

  setTimeout(function(){
    $fade.addClass('hide'); 
  }, 200)

tlB
  .to($cover, 1.5, {width:"0", ease:Power4.easeOut})
  .fromTo($nav, 1, {y: 6}, {y: 0, autoAlpha: 1, ease: Linear.easeNone}, '-=1')

tl
  .to($registration, 1.5, {autoAlpha: 1, rotation: "+=540", ease:Power1.easeOut})
  .fromTo($leftCross, .4, {height: "+=4", y: -2}, {height: "-=4", y: 0, ease: Linear.easeNone}, '-=1')
  .fromTo($rightCross, .4, {width: "+=4", x: -2}, {width: "-=4", x: 0, ease: Linear.easeNone}, '-=1')

  .fromTo($topLeft, 1, { x: 18, y: 18},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.5')
  .fromTo($topMiddle, 1, { x: 0, y: 18},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.45')
  .fromTo($topRight, 1, { x: -18, y: 18},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.4')
  .fromTo($MiddleRight, 1, { x: -18, y: 0},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.35')
  .fromTo($BottomRight, 1, { x: -18, y: -18},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.3')
  .fromTo($BottomMiddle, 1, { x: 0, y: -18},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.25')
  .fromTo($BottomLeft, 1, { x: 18, y: -18},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.2')
  .fromTo($MiddleLeft, 1, { x: 18, y: 0},{x:0, y: 0, autoAlpha: 1, ease:Back.easeOut.config(1.7)}, '-=1.15')

$(function () {
  $('a').not('.enlarge').on('click', function(){
    var href = $(this).attr('href'),
    exceptions = ['#', 'tel:+6092384513', 'mailto:JBIRD1111@gmail.com'];

    if($(this).attr('target') == '_blank') {}
      
    else if(jQuery.inArray(href, exceptions) === -1) {

      $fade.removeClass('hide'); 
      TweenLite.to($header, .7,{autoAlpha: 0, ease: Linear.easeNone})
      setTimeout(function() {window.location = href}, 700);

      return false;
    } 
  });

   $linkBox.hover(function(){
    $(this).addClass('hover');  
  }, function(){
    $(this).removeClass('hover'); 
  });
});