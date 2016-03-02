$(function () {
  var heightToEnlarge = $(window).height() - 200;

  var imageHolder = [],
      $items = $('.Gallery-wrap ul'),
      imageCount = '',
      $projectTitle = $('.Header-intro h1').text(),
      $DOMtitle = $('.Header-gallery h4');  

  function dupeImages(){
    $('.project').find('img').each(function(){
      
      var src = $(this).data('src'),
          caption = $(this).parent()[0].innerText;
      
      imageHolder.push({src: src, caption: caption})
    });

    imageCount = imageHolder.length;
    for (var i = 0; i < imageCount; i++) {
      $newContent = '<li><a href="' + imageHolder[i].src + '" class="enlarge"><img style="opacity:1" src="' + imageHolder[i].src + '">' + imageHolder[i].caption +'</a></li>';
    
      $items
        .append($newContent)
        .find('a.enlarge')
        .fluidbox({})
        .on('openstart.fluidbox', function() {
          $('.Header-gallery').addClass('open');
        })
        .on('openend.fluidbox', function() {
          var caption = $(this)[0].innerText;
          if(caption.length) {
            $('.Caption--gallery span').text(caption);
            $('.Caption--gallery').addClass('show');
          }
          $('.arrow').addClass('show');
        })
        .on('closestart.fluidbox', function() {
          $('.Caption--gallery').removeClass('show');
          $('.Caption--gallery span').text('');
          $('.Header-gallery').removeClass('open');
          $('.arrow').removeClass('show');
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
    window.location.hash = '';

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

  $(".arrow").on('click', function(){
    var open = $('.fluidbox--opened');
    var $this = $(this);

    open.trigger('close.fluidbox');
    setTimeout(function(){

      if($this.is('.next')) {
        var next = open.parent('li').next().find('.enlarge');
        if (next.length > 0) {
          next.click();
        } else {
          $('.Gallery-wrap li:first-of-type').find('.enlarge').click();
        }
      } else {
        var prev = open.parent('li').prev().find('.enlarge');
        if (prev.length > 0) {
          prev.click();
        } else {
          $('.Gallery-wrap li:last-of-type').find('.enlarge').click();
        }
      }
      
    }, 700);
    return false;
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { 
      if($('body').hasClass('showGallery')) {
        hideGallery();
      }
    }
  });

  $(".enlarge img").unveil(300, function() {
    var $thisImage = $(this);

    $thisImage.load(function() {
      var naturalWidth = $thisImage[0].naturalWidth;

      $(this).closest('.enlarge').fluidbox({ maxwidth: naturalWidth})
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
      $(this).addClass('show');
    });
  });

  if($('body').hasClass('work_buoy')) {
    returnTweets(['690495916822904832', '688844171935789056', '685987064362496000', '684439509111472128', '682566424221585410', '682428554009690112', '679656274615754752', '692503794110849024']);
  } else if ($('body').hasClass('work_community')) {
    returnTweets(['646845247406739456','698465443099578368','665052000170721280','636597666294710272','635905737772810240','626023558741950464','577941459141160960','551191219951644672','509376753932836865','509376679744372736','509357069758390273','503351558231576576','587017764159807488']);
  }

  function returnTweets(tweets){
    var numTweets = tweets.length;

    for (var i = 0; i < numTweets; i++) {
      $.ajax({
         type: 'GET',
         url: 'https://api.twitter.com/1/statuses/oembed.json?id='+ tweets[i] +'&maxwidth=340&hide_media=true&hide_thread=true&omit_script=false',
         dataType: 'jsonp',
         success: function(data) {
           var markup = data.html;
           $('.Tweets').append(markup);
         }
      });
    }
  }
});