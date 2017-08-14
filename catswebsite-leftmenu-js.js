$(window).on('scroll', function () {
    if ($(window).scrollTop() > 120) {
        $('.menu-container').addClass('menu__zero-top');
    } else { 
        $('.menu-container').removeClass('menu__zero-top');
 
    };
})
