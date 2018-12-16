$( document ).ready(function() {
  console.log( "ready!" );

  /*Mobile menu*/
  $('.menu-toggle').click(function(e) {
    e.preventDefault();
    
    // en toggle der skifter imellem to classes
    $('.site-nav').slideToggle('site-nav--open');

    // en toggle der skifter imellem to classes
    $(this).toggleClass('open');
    
  });

});