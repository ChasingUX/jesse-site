var tl = new TimelineLite({delay:0.3});
var tlB = new TimelineLite();

 var $cover = $(".Cover"),
  $registration = $('.Registration'),
  $leftCross = $(".Cross--left"),
  $rightCross = $(".Cross--right"),
  $topLeft = $(".tl"),
  $topMiddle = $(".tm"),
  $topRight = $(".tr"),
  $MiddleRight = $(".rm"),
  $BottomRight = $(".rb"),
  $BottomMiddle = $(".mb"),
  $BottomLeft = $(".lb"),
  $MiddleLeft = $(".ml"),
  $header = $('.Header-nav'),
  $nav = $header.find('li'),
  $fade = $('.Fade');

  console.log(CSSRulePlugin.getRule("a:before"))
tlB
  .to($cover, 1.5, {width:"0", ease:Power4.easeOut})
  //.staggerFromTo($nav, 0.4, {autoAlpha: 0, y: '+=10'}, {autoAlpha: 1, y: '0'}, 0.08, '-=1')
  .fromTo($nav, 1, {y: 6}, {y: 0, autoAlpha: 1, ease: Linear.easeNone}, '-=1')
  .to($fade, 1.5, {autoAlpha: 1, ease: Linear.easeNone}, '-=1')
  .fromTo($fade, 1, {y: 10}, {y: 0, ease: Power2.easeOut}, '-=1.5')

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
  
  //.fromTo($activeNav, 1, {cssRule:{left: '-70%'}}, {cssRule:{left: '-20%'}, ease: Power3.easeOut},'-=1')

  $('nav a').on('click', function(){
    var href = $(this).attr('href');
    TweenLite.to($fade, .7,{autoAlpha: 0, ease: Linear.easeNone})
    TweenLite.to($header, .7,{autoAlpha: 0, ease: Linear.easeNone})
    setTimeout(function() {window.location = href}, 700);
    return false;
  });