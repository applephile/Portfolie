$(function() {
    // 사이드 열기
    /* 
        이벤트 적용 방법 - click인 경우
        $('클릭할 대상').click(function() {
            $('클릭으로 인해서 상태가 변경될 대상').명령();
        })
    */

    // 1. open_menu를 클릭할 때 /사이드 열기
    $('.open_menu').click(function() {
        $('#side').animate({
            right : 0
        });

        $('#wrap').css({
            position : 'fixed'
        })
        return false;
    })

    // s_close 클릭할 때 /사이드 닫기
    $('.s_close').click(function() {
        // 아코디언 메뉴가 열려있는 상태에서 사이드가 닫히면 아코디언 메뉴도 닫힌다
        $('.s_gnb .d1 .sub').slideUp();
        $('#side').animate({
            right : '-100%'
        });

        $('#wrap').css({
            position : 'relative'
        })
        return false;
    })

    // 사이드 아코디언 메뉴 열기

    $('.s_gnb .d1 .m1').click(function() {

        let d = $(this).siblings('.sub').css('display');

        if(d == 'block') {
            $('.s_gnb .d1 .sub').slideUp();
            $('.s_gnb .d1 .m1').removeClass('on');
        } else {
            $('.s_gnb .d1 .sub').slideUp();
            $('.s_gnb .d1 .m1').removeClass('on');
            // 선택한 대상과 형제관계인 .sub만 열기
            $(this).siblings('.sub').slideDown();
            $(this).addClass('on');
        }

        return false;
    })


})
