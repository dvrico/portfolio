$(document).ready(function() {

  $('.menu').click(function(e) {
    e.stopPropagation();
    $('#main_nav').toggleClass('active');
    $('#top_header').toggleClass('active');
  });

  $(document).click(function() {
    $('#main_nav').removeClass('active');
    $('#top_header').removeClass('active');
  });
});
