const AllImages  = document.querySelectorAll('img');
const menu = document.getElementById('menu');
const loader = document.getElementById('loader');
import { WeekMenu } from "./week_menu";

$(document).ready(function(){
    // checkImages();
    runCarousel();
    // reloadPage();
})

//Run carousel
function runCarousel() {
    $('#menu').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
}

//Images check
function checkImages() {
    for (const images of AllImages) {
        images.onload = function() {
            loader.classList.remove('active');
            menu.classList.add('active');
        };
    }
}

//Reload page
function reloadPage() {
    setTimeout(() => {
        location.reload();
        console.log('сторінка перезагрузилась');
    }, 10000);
}
