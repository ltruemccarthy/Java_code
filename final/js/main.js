
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });


$("img[src*='laurel']").on({
 "mouseover" : function() {
    this.src = 'img/laurel2.jpg';
  },
  "mouseout" : function() {
    this.src='img/laurel.jpg';
  }
});


 $( ".tt ul" ).hide();
  $( ".tt h3" ).click(function() {
  $( ".tt ul" ).slideToggle( "slow" );
});


});
