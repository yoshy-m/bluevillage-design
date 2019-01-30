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

//valentine top
$(document).ready(function(){
    var fixedElm = $('.mainVisual__bg');
    var cancellationElm = $('.kn__content');
 
    var fixedHeight = fixedElm.height();
    var cancellationVal = cancellationElm.offset().top - $(window).height() + fixedHeight;
    $(window).on('scroll',function(){
        if ($(window).scrollTop() < cancellationVal) {
            fixedElm.css('position', 'fixed');
        } else {
            fixedElm.css('position', 'relative');
        }
    });
});