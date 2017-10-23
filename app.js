$(function () {
    $(document).foundation();
    $('body').find('#gsc-i-id1').attr('placeholder', '輸入書名或雜誌名稱，找出哪個平台有賣');
    var swiper = new Swiper('.swiper-container', {
        speed:2000,
        effect:'fade',
        fadeEffect: {
            crossFade: false
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    fbq('track', 'Lead');
});

$('.sample').click(function () {
    $('.gsc-input').val('"'+ $(this).text() +'"');
    $('.gsc-search-button').click();
    fbq('track', 'Search');
});


// tracking
$('.wrapper').on('click','.gsc-search-button-v2', function () {
    var vname = $('#gsc-i-id1').val();
    //console.log(vname);
    if (window.ga) ga('send', 'event', 'search', 'click', vname);
    fbq('track', 'Search');
})

$('.fitem').click(function(){
    var vname = $(this).find('.fname').text();
    if (window.ga) ga('send', 'event', 'free', 'click', vname);
})

$('.header a').click(function(){
    var linkname = $(this).text();
    if (window.ga) ga('send', 'event', 'ui', 'click', linkname);
})