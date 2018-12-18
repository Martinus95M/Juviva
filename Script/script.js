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

  $(function() {
    var selectedClass = "";
		$("p").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#video").fadeTo(100, 0.1);
		$("#video div").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#video").fadeTo(500, 1);
    }, 500);
		
	});
});

});