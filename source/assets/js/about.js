$(function () {

  var $location = $(".timeline li"),
  $maps = $('.Maps'),
  $defaultActive = $('.active');

  $('.timeline').hoverIntent({
    over: mapInteraction,
    out: function(){console.log('mouseout')},
    selector: 'li',
    interval: 80
  });

  function mapInteraction(){
    var $this = $(this), 
      city = $this.find('h4').text(), 
      longitude = $this.data('longitude'),
      latitude = $this.data('latitude'),
      zoom = $this.data('zoom');

    if ($this[0].className == 'hover' || $this[0].className == 'active' ) {} 

    else {
      console.log("Map moving to: " + city);

      $notHovers = $location.not($(this));
      $notHovers.removeClass('hover');
      $notHovers.parent().removeClass('hovered');

      $(this).addClass('hover');
      $(this).parent().addClass('hovered');

      $defaultActive.removeClass('active');

      fly(longitude,latitude, zoom);
    }
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoiamJpcmQxMTExIiwiYSI6ImNpazVwYzdhNzAwN3BpZm0yZHhhOWp6c3IifQ.6EQjuObxFgOTrafXG9Juig';

  var start = [-74.005, 40.719];

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jbird1111/cil48x6cd000x9jm1ajh9yjw5',
      center: start,
      zoom:14
  });

  // var isAtStart = true;

  function fly(longitude,latitude, zoom) {

    var end = [longitude, latitude];
    map.easeTo({
      center: end,
      zoom: zoom,
      bearing: 0,
      // screenSpeed: 2,
      // minZoom: 8, 
      // these options are for flyTo
    });
  }
});