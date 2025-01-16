AOS.init();

const teamSlider = new Swiper('.team-slider', {
    loop: true,
    // autoplay: true,
    autoplay: {
        delay: 3000, // 1000 -> 1초
    },
    speed: 500,

    // 모바일의 세팅으로 시작
    slidesPerView: 1.5,
    // spaceBetween: 20,

    // 반응형 분기점
    breakpoints: {
        // 500픽셀 이상
        500: {
            slidesPerView: 2.5,
        },
        // 1024픽셀 이상
        1024: {
            slidesPerView: 4,
        },
    },
});
