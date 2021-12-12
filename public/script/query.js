$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 0);
});

$(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled > 450) {
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

$("#worksBtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 0);
});

$("#skillsBtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 0);
});

$("#contactBtn").click(function () {
    $('html, body').animate({
        scrollTop: $("#contacts").offset().top
    }, 0);
});

$('#aboutme__popup').hide();

$('#aboutme').click(function () {
    $('#aboutme__popup').fadeIn();
})

$('#close').click(function () {
    $('#aboutme__popup').fadeOut();
})

