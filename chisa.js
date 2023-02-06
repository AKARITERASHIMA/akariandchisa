$(function () {
    // 画像fadein
    $(window).on("scroll",function () {
        $(".fadein").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass("active");
            };
        });
    });

    // ページTOPへ戻るbtn
    $(".top").on("click",function () {
        $("body, html").animate({scrollTop: 0},500);
    });
})