$(function(){
    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('is-active');
      });

    $('.menu__item>a').on('click',function(){
        $('.menu').toggleClass('is-active');
        });

  }());