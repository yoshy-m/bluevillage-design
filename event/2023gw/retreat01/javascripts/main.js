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
  $('.nav__btn').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.nav__wrap').addClass('enter');
    } else {
      $('.nav__wrap').removeClass('enter');
    }
  });
});

$(function() {
  $('.nav__link').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.nav__wrap').removeClass('enter');
    }
    if ($(this).hasClass('active')) {
      $('.nav__btn').removeClass('active');
    }
  });
});

//fadein
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});