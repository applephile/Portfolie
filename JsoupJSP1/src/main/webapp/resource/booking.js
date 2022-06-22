let localSeoul = document.querySelector(".localSeoul");
let localGyeonggi = document.querySelector(".localGyeonggi");
let localIncheon = document.querySelector(".localIncheon");
let localGangwon = document.querySelector(".localGangwon");
let localDaejeon = document.querySelector(".localDaejeon");
let localDaegu = document.querySelector(".localDaegu");
let localUlsan = document.querySelector(".localUlsan");
let localGyeongsang = document.querySelector(".localGyeongsang");
let localJeju = document.querySelector(".localJeju");

let theaterSeoul = document.querySelector(".theater_seoul");
let theaterGyeonggi = document.querySelector(".theater_gyeonggi");
let theaterIncheon = document.querySelector(".theater_incheon");
let theaterGangwon = document.querySelector(".theater_gangwon");
let theaterDaejeon = document.querySelector(".theater_daejeon");
let theaterDaegu = document.querySelector(".theater_daegu");
let theaterUlsan = document.querySelector(".theater_ulsan");
let theaterGyeongsang = document.querySelector(".theater_gyeongsang");
let theaterJeju = document.querySelector(".theater_jeju");

let localButton = document.querySelector(".localButton");
let theaterButton = document.querySelector(".theater_button");
let theaterCommon = document.querySelector(".theaterCommon");
let isOpen = false;

localSeoul.addEventListener("click", function() {
    theaterSeoul.style.display = "block";
    localSeoul.classList.remove("theaterOff");
    localSeoul.classList.add("theaterOn");
    if(document.querySelector(".theater_seoul").style.display = "block") {
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff");
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff");
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff");
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff");
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff");
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff");
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff");
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff");
    }
})
localGyeonggi.addEventListener("click", function() {
    theaterGyeonggi.style.display = "block";
    localGyeonggi.classList.remove("theaterOff");
    localGyeonggi.classList.add("theaterOn");
    if(document.querySelector(".theater_gyeonggi").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.add("theaterOff"); 
        localSeoul.classList.remove("first_button");
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff");
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff");
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff");
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff");
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff");
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff");
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff");
    }
})
localIncheon.addEventListener("click", function() {
    theaterIncheon.style.display = "block";
    localIncheon.classList.remove("theaterOff");
    localIncheon.classList.add("theaterOn");
    if(document.querySelector(".theater_incheon").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.add("theaterOff"); 
        localSeoul.classList.remove("first_button");
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff"); 
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff"); 
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff"); 
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff"); 
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff"); 
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff"); 
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff"); 
    }
})
localGangwon.addEventListener("click", function() {
    theaterGangwon.style.display = "block";
    localGangwon.classList.remove("theaterOff");
    localGangwon.classList.add("theaterOn");    
    if(document.querySelector(".theater_gangwon").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.remove("first_button"); 
        localSeoul.classList.add("theaterOff"); 
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff"); 
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff"); 
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff"); 
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff"); 
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff"); 
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff"); 
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff"); 
    }
})
localDaejeon.addEventListener("click", function() {
    theaterDaejeon.style.display = "block";
    localDaejeon.classList.remove("theaterOff");
    localDaejeon.classList.add("theaterOn");
    if(document.querySelector(".theater_daejeon").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.remove("first_button"); 
        localSeoul.classList.add("theaterOff"); 
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff");
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff");
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff");
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff");
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff");
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff");
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff");
    }
})
localDaegu.addEventListener("click", function() {
    theaterDaegu.style.display = "block";
    localDaegu.classList.remove("theaterOff");
    localDaegu.classList.add("theaterOn");
    if(document.querySelector(".theater_daejeon").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.remove("first_button"); 
        localSeoul.classList.add("theaterOff"); 
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff");
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff");
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff");
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff");
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff");
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff");
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff");
    }
})
localUlsan.addEventListener("click", function() {
    theaterUlsan.style.display = "block";
    localUlsan.classList.remove("theaterOff");
    localUlsan.classList.add("theaterOn");
    if(document.querySelector(".theater_daejeon").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.remove("first_button"); 
        localSeoul.classList.add("theaterOff"); 
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff");
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff");
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff");
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff");
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff");
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff");
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff");
    }
})
localGyeongsang.addEventListener("click", function() {
    theaterGyeongsang.style.display = "block";
    localGyeongsang.classList.remove("theaterOff");
    localGyeongsang.classList.add("theaterOn");
    if(document.querySelector(".theater_daejeon").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.remove("first_button"); 
        localSeoul.classList.add("theaterOff"); 
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff");
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff");
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff");
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff");
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff");
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff");
        theaterJeju.style.display = "none";
        localJeju.classList.add("theaterOff");
    }
})
localJeju.addEventListener("click", function() {
    theaterJeju.style.display = "block";
    localJeju.classList.remove("theaterOff");
    localJeju.classList.add("theaterOn");
    if(document.querySelector(".theater_daejeon").style.display = "block") {
        theaterSeoul.style.display = "none";
        localSeoul.classList.remove("first_button"); 
        localSeoul.classList.add("theaterOff"); 
        theaterGyeonggi.style.display = "none";
        localGyeonggi.classList.add("theaterOff");
        theaterIncheon.style.display = "none";
        localIncheon.classList.add("theaterOff");
        theaterGangwon.style.display = "none";
        localGangwon.classList.add("theaterOff");
        theaterDaegu.style.display = "none";
        localDaegu.classList.add("theaterOff");
        theaterUlsan.style.display = "none";
        localUlsan.classList.add("theaterOff");
        theaterGyeongsang.style.display = "none";
        localGyeongsang.classList.add("theaterOff");
        theaterDaejeon.style.display = "none";
        localDaejeon.classList.add("theaterOff");
    }
})

function selectedTheater() {
    let selectedWrap = document.querySelector('.selected_wrap');

    selectedWrap.classList.add("selected_wrapOn");
}
// view.addEventListener("click", function(){
//     if(isOpen == false) {
//         document.querySelector("#detail").style.display = "block";
//         isOpen = true;
//         view.innerHTML="상세 설명 닫기";
//     } else {
//         document.querySelector("#detail").style.display = "none";
//         isOpen = false;
//         view.innerHTML="상세 설명 보기";
//     }
// })
    // 1. open_menu를 클릭할 때 /사이드 열기
    // $('.open_menu').click(function() {
    //     $('#side').animate({
    //         right : 0
    //     });

    //     $('#wrap').css({
    //         position : 'fixed'
    //     })
    //     return false;
    // })

    // // s_close 클릭할 때 /사이드 닫기
    // $('.s_close').click(function() {
    //     // 아코디언 메뉴가 열려있는 상태에서 사이드가 닫히면 아코디언 메뉴도 닫힌다
    //     $('.s_gnb .d1 .sub').slideUp();
    //     $('#side').animate({
    //         right : '-100%'
    //     });

    //     $('#wrap').css({
    //         position : 'relative'
    //     })
    //     return false;
    // })

    // // 사이드 아코디언 메뉴 열기

    // $('.s_gnb .d1 .m1').click(function() {

    //     let d = $(this).siblings('.sub').css('display');

    //     if(d == 'block') {
    //         $('.s_gnb .d1 .sub').slideUp();
    //         $('.s_gnb .d1 .m1').removeClass('on');
    //     } else {
    //         $('.s_gnb .d1 .sub').slideUp();
    //         $('.s_gnb .d1 .m1').removeClass('on');
    //         // 선택한 대상과 형제관계인 .sub만 열기
    //         $(this).siblings('.sub').slideDown();
    //         $(this).addClass('on');
    //     }

    //     return false;
    // })
