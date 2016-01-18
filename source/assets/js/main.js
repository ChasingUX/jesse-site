// TweenLite.to('#photo', 1.8, {
//   width:"200px", 
//   height:"200px", 
//   ease:Power2.easeInOut, 
//   delay: .3, 
//   onComplete: function(){
//     console.log('done');
//   }
// });

 var tl = new TimelineLite({
  onComplete: function(){
    stagger();
  }
 });

 var $bg = $(".bg"),
   $photo = $("#photo"),
   $spans = $('.spanWrap span');

tl.to($photo, 2.1, {
  width:"0", 
  height:"0", 
  ease:Power2.easeInOut, 
  delay: .3
})
.to($photo, 1, {
  opacity: 0,
  ease:Power2.easeInOut, 
}, '-=1.2')
.to($bg, 1, {
  backgroundColor:"#3E3E3E",
  left: "20px",
  right: "20px",
  bottom: "20px",
  top: "20px",
  ease:Power2.easeInOut
}, '-=.5');

function stagger(){
  var ts = new TimelineMax({repeat: -1, yoyo:false});

  //ts.timeScale( 1.1 ); //sets timeScale to half-speed

  ts.staggerTo($spans, 1, {
    opacity: 1,
    backgroundColor: "#ffffff",
    y: "-10",
    ease:Power2.easeInOut
  }, .2, '+=0')

  .staggerTo($spans, 1, {
    y: "0",
    opacity: 0,
    backgroundColor: "#3E3E3E",
    ease:Power2.easeInOut
  }, .2, '+=0' )
}


// $('h1').on('click', function(){
//   tl.reverse();
// });