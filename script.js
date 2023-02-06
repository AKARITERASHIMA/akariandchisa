$(function(){

    // ハンバーガーメニュー

    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass("active");//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('open');//ナビゲーションにopenクラスを付与
    });
    
    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass("active");//ボタンの activeクラスを除去し
        $("#g-nav").removeClass("open");//ナビゲーションのopenクラスも除去
    });

    // $('.your-class').slick({
    //     	setting-name: setting-value
    //     });

    // スライダープラグイン『Slick』使用
    $(".slider").slick({
        arrows: false,
        dots: true,
        autoplay: true //自動再生する
    });

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