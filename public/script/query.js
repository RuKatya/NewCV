$('.intro').hide().slideDown(800)

$(window).scroll
$(window).scrollTop(function () {
    if ($(this).scrollTop() >= 1000) {
        // длительность анимации - 'slow'
        // тип анимации -  'linear'
        $('.intro').slideUp('slow', 'swing');
    } else if
        ($(this).scrollTop() <= 1) {
        // длительность анимации - 'slow'
        // тип анимации -  'linear'
        $('.intro').slideDown('slow', 'linear');
    }
})
// $(window).scroll(function () {
//     if ($(this).scrollTop() >= 5) {
//         // длительность анимации - 'slow'
//         // тип анимации -  'linear'
//         $('.intro').fadeIn('slow', 'linear');
//     }
//     else {
//         // длительность анимации - 'fast'
//         // тип анимации -  'swing'
//         $('.intro').fadeOut('fast', 'swing');
//     }
// });

