$(".gnb>li").hover(function(){
    $(this).find(".depth2").stop().fadeToggle();
});

//mgnb
$(".btn_ham").click(function(){
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({"right":"0"}, 500);
});
$(".btn_close").click(function(){
    $(".dim").fadeOut();
    $(".mgnb_wrap").animate({"right":"-100%"}, 500);
});


//search
$(".btn_search").click(function(){
    $(".search").stop().fadeIn();
});
$(".search_close").click(function(){
    $(".search").stop().fadeOut();
});

$(".gallery ul li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

const visual_list = new Swiper(".visual_list",{
    effect: "fade",
    navigation: { //슬라이드 방향 버튼
        nextEl: ".swiper-button-next", //다음 슬라이드
        prevEl: ".swiper-button-prev", //이전 슬라이드
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", // 버튼 종류 설정 'bullets'/ 'fraction' / 'profressbar' 
        clickable: true, // 버튼 클릭 여부 
    },
    loop: true,
});

const brand_txt_list = new Swiper(".brand_txt_list",{
    effect: "fade",
    fadeEffect: {//배경이 투명할 경우 세부옵션 추가
        crossFade: true
    },
    
    autoplay: { //자동슬라이드
        delay: 2500, //2.5초 대기시간
        disableOnInteraction: false,
    },
});

const brand_img_list = new Swiper(".brand_img_list",{
    effect: "fade",
    navigation: { //슬라이드 방향 버튼
        nextEl: ".swiper-button-next", //다음 슬라이드
        prevEl: ".swiper-button-prev", //이전 슬라이드
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets", // 버튼 종류 설정 'bullets'/ 'fraction' / 'profressbar' 
        clickable: true, // 버튼 클릭 여부 
    },
    
});

brand_txt_list.controller.control = brand_img_list
brand_img_list.controller.control = brand_txt_list



//info
const info_list = new Swiper(".info_list", {
    slidesPerView: 1,
    breakpoints:{
        750:{
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3,
        },
    },
    centeredSlides: true, //첫번째 사진을 센터로
    loop: true,
    navigation: { //슬라이드 방향 버튼
        nextEl: ".info-next", //다음 슬라이드
        prevEl: ".info-prev", //이전 슬라이드
    },
});