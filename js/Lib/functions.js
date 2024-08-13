import Swiper from "./swiper/swiper-bundle.min.mjs";
function bootHeroSlider(){
    const slider = new Swiper("#hero-slider",{
        loop: true,
        cssMode: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    return slider;
}
export {
    bootHeroSlider
}
