$(function () {

  var $location = $(".timeline li"),
  $maps = $('.Maps'),
  $defaultActive = $('.active');

  $location.not('.hover').on('mouseenter', function(){
    var city = $(this).find('h4').text(), 
      longitude = $(this).data('longitude'),
      latitude = $(this).data('latitude');

      console.log("travel to: " + city);

    $notHovers = $location.not($(this));
    $notHovers.removeClass('hover');
    $notHovers.parent().removeClass('hovered');

    $(this).addClass('hover');
    $(this).parent().addClass('hovered');

    $defaultActive.removeClass('active');

    fly(longitude,latitude);
  });

  mapboxgl.accessToken = 'pk.eyJ1IjoiamJpcmQxMTExIiwiYSI6ImNpazVwYzdhNzAwN3BpZm0yZHhhOWp6c3IifQ.6EQjuObxFgOTrafXG9Juig';

  var start = [-74.005, 40.719];

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jbird1111/cil48x6cd000x9jm1ajh9yjw5',
      center: start,
      zoom:14
  });

  var isAtStart = true;

  function fly(longitude,latitude) {

    var end = [longitude, latitude],
        target = isAtStart ? end : start;
    
    isAtStart = !isAtStart;

    map.flyTo({
      center: target,
      zoom: 14,
      bearing: 0,
      // speed: .2, 
      // pitch: 1, 

      easing: function (t) {
          return t;
      }
    });
  }
});