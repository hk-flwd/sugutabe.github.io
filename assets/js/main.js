'use strict';

{

    $(function () {

        // header__btn & menu
        $('.header__btn').on('click', function () {
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function () {
            $('.nav').removeClass('active');
        });

        // slick
        $('.slick-slider').slick({
            dots: true,
            arrows: false,
        });

        // scrollTop
        $('.topBtn').on('click', function(){
            const position = 0;
            const speed = 600;
            $('html, body').animate({
                scrollTop: position
            }, speed);
        });
    });

}


