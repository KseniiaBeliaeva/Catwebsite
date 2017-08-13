/*top menu position fixed on scroll*/

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 60) {
        $('.menu-container').addClass('menu__zero-top');
    } else {
        $('.menu-container').removeClass('menu__zero-top');
    }
});
