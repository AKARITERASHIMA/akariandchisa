$(function () {
    // ページTOPへ戻るbtn
    $(".top").on("click",function () {
        $("body, html").animate({scrollTop: 0},500);
    });
})