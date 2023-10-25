let searchBtn = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");
function showbar() {
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
}


let loginForm = document.querySelector(".login");
function showForm() {
    loginForm.classList.add('active');
}
function hideForm() {
    loginForm.classList.remove('active');
}


let menu_bar = document.querySelector("#menu-bar");
let ancorMenu = document.querySelector(".navbar");
function showMenu() {
    menu_bar.classList.toggle("fa-times");
    ancorMenu.classList.toggle("active");
}

////////////////////////////////////////////////
////////////////////////////////////////////////
let vidBtn = document.querySelectorAll(".video-btn");
vidBtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");
        document.querySelector("#video-slider").src = src
    })
})
// ////////////////
// ////////////////
var swiper = new Swiper(".review-slider", {
    spaceBetween : 20,
    loop: true,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
