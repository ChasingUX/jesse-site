$(function () {

  var $location = $(".timeline li"),
  $maps = $('.Maps'),
  $defaultActive = $('.active');

  $location.hover(function(){
    var city = $(this).find('h4').text(), 
      longitude = $(this).data('longitude'),
      latitude = $(this).data('latitude');

      console.log(city + ": latitude: " + latitude + " longitude:" + longitude);

    $notHovers = $location.not($(this));
    $(this).addClass('hover');
    $(this).parent().addClass('hovered');
    $defaultActive.removeClass('active');
    TweenLite.to($maps, .5,{autoAlpha: 1, ease: Linear.easeNone});
  }, function(){
    $(this).removeClass('hover');
    $(this).parent().removeClass('hovered');
    $defaultActive.addClass('active');
    TweenLite.to($maps, .5,{autoAlpha: 0, ease: Linear.easeNone});
  });
});