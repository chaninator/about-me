$(function() {

  $('.hamburger').on('click', function(e) {
    $('.nav-links').toggleClass('open-menu');
    e.preventDefault();
    $('.nav-links a').on('click', function(e) {
      $('.nav-links').toggleClass('open-menu');
      e.preventDefault();
    });
  });

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  // Quote Scroll Code

  var quoteCounter = 0;
  var quoteLength = $('blockquote').length;

  setInterval(function() {
    $('blockquote').eq(quoteCounter).fadeOut(800, function() {
      if (quoteCounter === quoteLength - 1) {
        quoteCounter = 0;
      } else {
        quoteCounter += 1;
      }
      $('blockquote').eq(quoteCounter).fadeIn();
    });
  }, 7000);

  // Nav Scroll Code

  function scrollNav() {
    $('.nav-links a').click(function() {
      $('.active').removeClass('active');
      $(this).closest('a').addClass('active');
      var theClass = $(this).attr('class');
      $('.' + theClass).parent('a').addClass('active');
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();

  // Carousel Code

  $('#myCarousel').carousel();
  // Enable Carousel Indicators
  $('.item').click(function() {
    $('#myCarousel').carousel(1);
  });
  // Enable Carousel Controls
  $('.left').click(function() {
    $('#myCarousel').carousel('prev');
  });
  $('.right').click(function() {
    $('#myCarousel').carousel('next');
  });
  $('#myCarousel').carousel('cycle');





});
