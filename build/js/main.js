function backToTop () {
    $("a.back_to_top, .back_top_bar").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });
}

function slideNews () {
    var swiper = new Swiper(".block_news .news_slide", {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
            nextEl: ".block_news .block_header__control .next",
            prevEl: ".block_news .block_header__control .prev",
        },
    });
}

function slideCustomer () {
    var swiper = new Swiper(".block_customer .customer_slide", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".block_customer .block_header__control .next",
            prevEl: ".block_customer .block_header__control .prev",
        },
        pagination: {
            el: ".block_customer .swiper-pagination",
            clickable: true,
        },
    });
}


function slideHomeBanner () {
    var swiper = new Swiper(".home_banner__slide .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".home_banner__slide .swiper-button-next",
            prevEl: ".home_banner__slide .swiper-button-prev",
        },
        pagination: {
            el: ".home_banner__slide .swiper-pagination",
            clickable: true,
        },
    });
}


function slideBoxSale () {
    var swiper = new Swiper(".box_sale .swiper-container", {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
            nextEl: ".box_sale .box_sale__arr .next",
            prevEl: ".box_sale .box_sale__arr .prev",
        },
    });
}

function toggleMenuCategory () {
    let isHome = $('#page_home');
    if (isHome.length === 0) {
        $('.menu_category__header').click(function () {
            $('.menu_category__body').toggleClass('open')
        })
    }
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
    backToTop();
    slideNews ();
    slideCustomer ();
    slideBoxSale ();
    slideHomeBanner();
    toggleMenuCategory();
})
