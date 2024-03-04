const AllImages  = document.querySelectorAll('img');
const menu = document.getElementById('menu');
const loader = document.getElementById('loader');

//Carousel
$(document).ready(function(){
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
})

//Images check
for (const images of AllImages) {
    images.onload = function() {
        loader.classList.remove('active');
        menu.classList.add('active');
    };
}