$('document').ready(function() {

  // Assign Variables
  var $portfolio_thumbnail = $('.portfolio');
  //Might want to change class targets to parent <a> tags below
  var $bike_thumbnail = $('.bike');
  var $space_thumbnail = $('.space');

  // Event Listeners
  $portfolio_thumbnail.hover(function() {
    //animate up
    //highlight borders
    $portfolio_thumbnail.css('z-index', '5');
  });

  $bike_thumbnail.hover(function() {
    //animate up
    //highlight borders
    $bike_thumbnail.css('z-index', '5');
  });

});
