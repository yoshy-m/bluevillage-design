// smooth scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// header menu
$(function() {
  $('.header__btn').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.header__nav').addClass('enter');
    } else {
      $('.header__nav').removeClass('enter');
    }
  });
});

$(function() {
  $('.header__navLink').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.header__nav').removeClass('enter');
    }
    if ($(this).hasClass('active')) {
      $('.header__btn').removeClass('active');
    }
  });
});