$(function () {

  $location = $(".timeline li"),
  $maps = $('.Maps'),
  $defaultActive = $('.active');

  $location.hover(function(){
    $notHovers = $location.not($(this));

    $(this).addClass('hover');
    $defaultActive.removeClass('active');
    TweenLite.to($notHovers, .5,{autoAlpha: .2, ease: Linear.easeNone});
    TweenLite.to($maps, .5,{autoAlpha: 1, ease: Linear.easeNone});
    
  }, function(){
    $(this).removeClass('hover');
    $defaultActive.addClass('active');
    TweenLite.to($notHovers, .5,{autoAlpha: 1, ease: Linear.easeNone});
    TweenLite.to($maps, .5,{autoAlpha: 0, ease: Linear.easeNone});
  });
});