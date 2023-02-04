$(function(){

    // ハンバーガーメニュー

    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('open');//ナビゲーションにopenクラスを付与
    });
    
    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('open');//ナビゲーションのopenクラスも除去
    });

    // $('.your-class').slick({
    //     	setting-name: setting-value
    //     });

    $(".slider").slick({
        arrows: false,
        dots: true,
        autoplay: true
    });





})