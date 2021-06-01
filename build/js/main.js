function backToTop () {
    $("a.back_to_top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });
}

function slideNews () {
    var swiper = new Swiper(".news_slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
    backToTop();
    slideNews ();
})
