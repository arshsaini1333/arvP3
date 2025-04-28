const headlines = document.querySelectorAll('.headline');
let current = 0;

function showHeadline(index) {
    headlines.forEach(h => h.classList.remove('show'));
    headlines[index].classList.add('show');
}

showHeadline(current);

setInterval(() => {
    headlines[current].classList.remove('show');
    current = (current + 1) % headlines.length;
    showHeadline(current);
}, 3000);



var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // the dom element
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './image/animation.json' // path to your animation JSON file
});

AOS.init({
    duration: 1000, // animation duration in ms
    once: false, // whether animation should happen only once
});

// Home Slideer
const swiperHome = new Swiper(".homeSwiper", {
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: "fade",
});


// Our Client Slider
const swiper = new Swiper('.client-swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    breakpoints: {
        320: { // Mobile screens
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: { // Small phones
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: { // Tablets
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: { // Desktop
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
});