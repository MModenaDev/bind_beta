$(document).ready(function(){

  //Show hide button on scroll
  $(window).scroll(function(){
    if($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop: 0}, 1000);
    $('.scrollToTop').animate({opacity: 0}, 800, function(){
      $('.scrollToTop').animate({opacity: 1});
    });
  });
});
