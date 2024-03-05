const AllImages  = document.querySelectorAll('img');
const menu = document.getElementById('menu');
const loader = document.getElementById('loader');

$(document).ready(function(){
    checkImages();
    runCarousel();
    reloadPage();
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

const WeekMenu = {
    monday: {
        data: '04.03.2024',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'Сарделька варена з макаронами відварними',
                output: '355/140'
            },
            dish_2: {
                name: 'Хліб, масло, цукор, чай з лимоном, сир твердий',
                output: '250'
            },
            dish_3: {
                name: `<i>II сніданок:  </i>йогурт`,
                output: '115'
            },
        },
        meal_2: {
            name: 'Сніданок',
            dish_1: {
                name: 'Сарделька варена з макаронами відварними',
                output: '355/140'
            },
            dish_2: {
                name: 'Хліб, масло, цукор, чай з лимоном, сир твердий',
                output: '250'
            },
            dish_3: {
                name: `<i>II сніданок:  </i>йогурт`,
                output: '115'
            },
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'солдат Олена ДРАГАН'
        }
    },
    tuesday: {
        data: '05.03.2024',
        diet: 'Дієта №15',
        meal: 'Сніданок',
        dish_1: {
            name: 'Сарделька варена з макаронами відварними',
            output: '355/140'
        },
        dish_2: {
            name: 'Хліб, масло, цукор, чай з лимоном, сир твердий',
            output: '250'
        },
        dish_3: {
            name: `<i>II сніданок:  </i>йогурт`,
            output: '115'
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'солдат Олена ДРАГАН'
        }
    }
}

//Reload page
function reloadPage() {
    setTimeout(() => {
        location.reload();
        console.log('сторінка перезагрузилась');
    }, 10000);
}
