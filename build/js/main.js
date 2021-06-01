function backToTop () {
    $("a.back_to_top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
    backToTop();
})
