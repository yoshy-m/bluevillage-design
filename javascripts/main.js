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

// header apear
$(document).ready(function(){
  fixed_menu = 0;
  $(window).scroll(function(){
    if( $(this).scrollTop() > 70 ){
      if(fixed_menu==0){
        $('.header').slideDown(400);
        fixed_menu=1;
      }
    } else {
      if(fixed_menu){
        $('.header').slideUp(200);
        fixed_menu=0;
      }
    }
  });
});

//valentine top
$(document).ready(function(){
    var fixedElm = $('.mainVisual__bg');
    var cancellationElm = $('.lineup');
 
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