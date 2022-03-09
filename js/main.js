$(function(){
    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('is-active');
      });

    $('.menu__item>a').on('click',function(){
        $('.menu').toggleClass('is-active');
        });

    $(".slider").slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
    });
  });
  