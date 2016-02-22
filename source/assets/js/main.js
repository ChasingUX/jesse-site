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

  TweenLite.to($fade, .7,{autoAlpha: 0, delay: 0.2, ease: Linear.easeNone})

tlB
  .to($cover, 1.5, {width:"0", ease:Power4.easeOut})
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


  $('a').not('.enlarge').on('click', function(){
    var href = $(this).attr('href'),
    exceptions = ['#', 'tel:+6092384513', 'mailto:JBIRD1111@gmail.com'];

    if($(this).attr('target') == '_blank') {}
      
    else if(jQuery.inArray(href, exceptions) === -1) {
      TweenLite.to($fade, .7,{autoAlpha: 0, ease: Linear.easeNone})
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

  $(function () {

    var heightToEnlarge = $(window).height() - 200;


    $('.enlarge')
      .fluidbox({maxHeight: heightToEnlarge})
      .on('openend.fluidbox', function() {
        var caption = $(this)[0].innerText;
        if(caption.length) {
          $('.Caption span').text(caption);
          $('.Caption').addClass('show');
        }
      })
      .on('closestart.fluidbox', function() {
        $('.Caption').removeClass('show');
        $('.Caption span').text('');
      });

    var imageHolder = [],
        $items = $('.Gallery-wrap ul'),
        imageCount = '',
        $projectTitle = $('.Header-intro h1').text(),
        $DOMtitle = $('.Header-gallery h4');

    function dupeImages(){
      $('.project').find('img').each(function(){
        
        var src = $(this).attr('src'),
            caption = $(this).parent()[0].innerText;
        
        imageHolder.push({src: src, caption: caption})
      });

      imageCount = imageHolder.length;

      for (var i = 0; i < imageCount; i++) {
        $newContent = '<li><a href="' + imageHolder[i].src + '" class="enlarge"><img src="' + imageHolder[i].src + '">' + imageHolder[i].caption +'</a></li>';
        $items
          .append($newContent)
          .find('a.enlarge')
          .fluidbox({maxHeight: heightToEnlarge})
          .on('openstart.fluidbox', function() {
            $('.Header-gallery').addClass('open');
          })
          .on('openend.fluidbox', function() {
            var caption = $(this)[0].innerText;
            if(caption.length) {
              $('.Caption--gallery span').text(caption);
              $('.Caption--gallery').addClass('show');
            }
          })
          .on('closestart.fluidbox', function() {
            $('.Caption--gallery').removeClass('show');
            $('.Caption--gallery span').text('');
            $('.Header-gallery').removeClass('open');
          });
      }
    }

    function showGallery(){
      $('body').addClass('showGallery');
      window.location.hash = 'gallery';

      setTimeout(function(){
        $DOMtitle.text('' + $projectTitle + ' Project Gallery (' + imageCount + ' images)');
        TweenMax.to($items, 1, {autoAlpha:1, ease: Power1.easeIn});
        TweenMax.fromTo($items, 1.5, {y: 13},{y: 0, ease: Power2.easeOut}, '-=1');
      }, 500);
    }

    function hideGallery() {
      $('body').removeClass('showGallery');
      TweenMax.to($items, .7, {autoAlpha:0, ease: Linear.easeNone});
      TweenMax.fromTo($items, .7, {y: 0},{y: 13, ease: Power2.easeOut}, '-=.8');
    }

    setTimeout(function(){
      dupeImages();
    }, 1000);

    if(window.location.hash == '#gallery') {
      setTimeout(function(){
        showGallery();
      }, 1000);
    }

    $('.article a').on('click', function(){
      showGallery();
      return false;
    });

    $(".back").on('click', function(){
      hideGallery();
    });

    $(document).keyup(function(e) {
      if (e.keyCode == 27) { 
        if($('body').hasClass('showGallery')) {
          hideGallery();
        }
      }
    });
  });