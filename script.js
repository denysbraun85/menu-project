const AllImages  = document.querySelectorAll('img');
const menu = document.getElementById('menu');
const loader = document.getElementById('loader');
const WeekMenu = {
    '04.03.2024': {
        day: 'Понеділок',
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
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `<i>Закуска:  </i>Салат із капусти свіжої, канапе з авокадо`,
                output: '101/70'
            },
            dish_2: {
                name: `<i>I страва:  </i>Розсольник, сметана`,
                output: '500/21'
            },
            dish_3: {
                name: `<i>II страва:  </i>Печеня по-домашньому`,
                output: '298/56'
            },
            dish_4: {
                name: `<i>III страва:  </i>Хліб, компот, фрукт`,
                output: '250'
            },
        },
        supper: {
            name: 'Вечеря',
            dish_1: {
                name: 'М’ясо тушковане з макаронами з маслом вершковим',
                output: '267/52'
            },
            dish_2: {
                name: 'Хліб, масло, яйце, цукор, чай з лимоном',
                output: '250'
            }
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'солдат Олена ДРАГАН'
        }
    },
    '05.03.2024': {
        day: 'Вівторок',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'М’ясо тушковане з кашею перловою розсипчастою з маслом вершковим',
                output: '222/52'
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
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `<i>Закуска:  </i>Салат з моркви по-корейськи`,
                output: '90'
            },
            dish_2: {
                name: `<i>I страва:  </i>Борщ український з сметаною`,
                output: '500/15'
            },
            dish_3: {
                name: `<i>II страва:  </i>М’ясо тушковане в сметані з кашею гречаною розсипчастою`,
                output: '189/58'
            },
            dish_4: {
                name: `<i>III страва:  </i>Хліб, компот, фрукт`,
                output: '250'
            },
        },
        supper: {
            name: 'Вечеря',
            dish_1: {
                name: 'Риба запечена з овочами з картопляним пюре',
                output: '382/127'
            },
            dish_2: {
                name: 'Хліб, масло, яйце, цукор, чай з лимоном',
                output: '250'
            }
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'солдат Оксана КОВТИК'
        }
    },
    '06.03.2024': {
        day: 'Середа',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'Каша рисова молочна',
                output: '263'
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
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `<i>Закуска:  </i>Салат з буряка`,
                output: '88'
            },
            dish_2: {
                name: `<i>I страва:  </i>Суп гороховий, сметана`,
                output: '500/15'
            },
            dish_3: {
                name: `<i>II страва:  </i>Котлета смажена з баношем`,
                output: '338/98'
            },
            dish_4: {
                name: `<i>III страва:  </i>Хліб, компот, фрукт`,
                output: '200'
            },
        },
        supper: {
            name: 'Вечеря',
            dish_1: {
                name: 'М’ясо тушковане з кашею ячною в’язкою з маслом вершковим',
                output: '305/52'
            },
            dish_2: {
                name: 'Хліб, масло, яйце, цукор, чай з лимоном',
                output: '250'
            }
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'старший солдат Володимир БАСАРАБА'
        }
    },
    '07.03.2024': {
        day: 'Четвер',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'М’ясо тушковане з кашею пшеничною в’язкою з маслом вершковим',
                output: '277/52'
            },
            dish_2: {
                name: 'Хліб, масло, цукор, чай з лимоном, сир твердий',
                output: '250'
            },
            dish_3: {
                name: `<i>II сніданок:  </i>йогурт, булочка`,
                output: '115'
            },
        },
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `<i>Закуска:  </i>Салат «Вітамінка»`,
                output: '116'
            },
            dish_2: {
                name: `<i>I страва:  </i>Бульйон курячий`,
                output: '500/35'
            },
            dish_3: {
                name: `<i>II страва:  </i>Плов з овочами`,
                output: '246/58'
            },
            dish_4: {
                name: `<i>III страва:  </i>Хліб, компот, фрукт`,
                output: '250'
            },
        },
        supper: {
            name: 'Вечеря',
            dish_1: {
                name: 'М’ясо смажене з кашею вівсяною в’язкою з маслом вершковим',
                output: '274/46'
            },
            dish_2: {
                name: 'Хліб, масло, яйце, цукор, чай з лимоном',
                output: '250'
            }
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'працівник ЗСУ Вікторія ПЕТРАЩУК'
        }
    },
    '08.03.2024': {
        day: 'П`ятниця',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'М’ясо варене з кашею вівсяною в’язкою з маслом вершковим',
                output: '274/46'
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
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `<i>Закуска:  </i>Перець та томати консервовані`,
                output: '90'
            },
            dish_2: {
                name: `<i>I страва:  </i>Борщ зелений, сметана`,
                output: '500/21'
            },
            dish_3: {
                name: `<i>II страва:  </i>Гуляш з кашею гороховою`,
                output: '255/58'
            },
            dish_4: {
                name: `<i>III страва:  </i>Хліб, компот, фрукт`,
                output: '250'
            },
        },
        supper: {
            name: 'Вечеря',
            dish_1: {
                name: 'Риба запечена з овочами з картопляним пюре',
                output: '382/127'
            },
            dish_2: {
                name: 'Хліб, масло, яйце, цукор, чай з лимоном',
                output: '250'
            }
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'працівник ЗСУ Валентина ЗВІРІД'
        }
    },
    '09.03.2024': {
        day: 'Субота',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'Сарделька варена з макаронами   відварними',
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
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `<i>Закуска:  </i>Салат «Дністер»`,
                output: '120'
            },
            dish_2: {
                name: `<i>I страва:  </i>Борщ український з сметаною`,
                output: '500/15'
            },
            dish_3: {
                name: `<i>II страва:  </i>Котлета смажена з кашею гречаною розсипчастою з маслом вершковим`,
                output: '240/98'
            },
            dish_4: {
                name: `<i>III страва:  </i>Хліб, компот, фрукт`,
                output: '250'
            },
        },
        supper: {
            name: 'Вечеря',
            dish_1: {
                name: 'М’ясо смажене з кашею перловою розсипчастою з маслом вершковим',
                output: '237/52'
            },
            dish_2: {
                name: 'Хліб, масло, яйце, цукор, чай з лимоном',
                output: '250'
            }
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'солдат Олена ДРАГАН'
        }
    },
    '10.03.2024': {
        day: 'Неділя',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'М’ясо варене з кашею пшеничною в’язкою з маслом вершковим',
                output: '271/46'
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
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `<i>Закуска:  </i>Ікра бурячкова`,
                output: '120'
            },
            dish_2: {
                name: `<i>I страва:  </i>Капусняк «Львівський», сметана`,
                output: '500/18'
            },
            dish_3: {
                name: `<i>II страва:  </i>Биточок смажений з кашею рисовою розсипчастою з маслом вершковим`,
                output: '271/98'
            },
            dish_4: {
                name: `<i>III страва:  </i>Хліб, компот, фрукт`,
                output: '250'
            },
        },
        supper: {
            name: 'Вечеря',
            dish_1: {
                name: 'М’ясо смажене з кашею перловою розсипчастою з маслом вершковим',
                output: '237/52'
            },
            dish_2: {
                name: 'Хліб, масло, яйце, цукор, чай з лимоном',
                output: '250'
            }
        },
        responsive: {
            chief_position: 'Начальник їдальні:',
            chief_name: 'сержант Марія САХНЮК',
            cook: 'Кухар',
            cook_name: 'солдат Оксана КОВТИК'
        }
    },
}

$(document).ready(function(){
    BuildMenu();
    // checkImages();
    runCarousel();
    // reloadPage();
})

// Run carousel
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

// Images check
function checkImages() {
    for (const images of AllImages) {
        images.onload = function() {
            loader.classList.remove('active');
            menu.classList.add('active');
        };
    }
}

// Reload page
function reloadPage() {
    setTimeout(() => {
        location.reload();
        console.log('сторінка перезагрузилась');
    }, 10000);
}



// Date
const date = new Date();
const formattedDate = date.toLocaleDateString();

// Build Menu
function BuildMenu() {
    for (const key in WeekMenu) {
        if (formattedDate === key) {
            CreateTemplateBreakfast(
                key,
                WeekMenu[key].day,
                WeekMenu[key].diet,
                WeekMenu[key].breakfast.name,
                WeekMenu[key].breakfast.dish_1.name,
                WeekMenu[key].breakfast.dish_1.output,
                WeekMenu[key].breakfast.dish_2.name,
                WeekMenu[key].breakfast.dish_2.output,
                WeekMenu[key].breakfast.dish_3.name,
                WeekMenu[key].breakfast.dish_3.output,
                WeekMenu[key].responsive.chief_position,
                WeekMenu[key].responsive.chief_name,
                WeekMenu[key].responsive.cook,
                WeekMenu[key].responsive.cook_name
            );
            CreateTemplateDinner(
                key,
                WeekMenu[key].day,
                WeekMenu[key].diet,
                WeekMenu[key].dinner.name,
                WeekMenu[key].dinner.dish_1.name,
                WeekMenu[key].dinner.dish_1.output,
                WeekMenu[key].dinner.dish_2.name,
                WeekMenu[key].dinner.dish_2.output,
                WeekMenu[key].dinner.dish_3.name,
                WeekMenu[key].dinner.dish_3.output,
                WeekMenu[key].dinner.dish_4.name,
                WeekMenu[key].dinner.dish_4.output,
                WeekMenu[key].responsive.chief_position,
                WeekMenu[key].responsive.chief_name,
                WeekMenu[key].responsive.cook,
                WeekMenu[key].responsive.cook_name
            );
            CreateTemplateSupper(
                key,
                WeekMenu[key].day,
                WeekMenu[key].diet,
                WeekMenu[key].supper.name,
                WeekMenu[key].supper.dish_1.name,
                WeekMenu[key].supper.dish_1.output,
                WeekMenu[key].supper.dish_2.name,
                WeekMenu[key].supper.dish_2.output,
                WeekMenu[key].responsive.chief_position,
                WeekMenu[key].responsive.chief_name,
                WeekMenu[key].responsive.cook,
                WeekMenu[key].responsive.cook_name
            );
        }
    }
}


// BREAKFAST Template
function CreateTemplateBreakfast(
    date, day, diet, meal_title_name, dish_1_name, dish_1_output, dish_2_name,
    dish_2_output, dish_3_name, dish_3_output, chief_position, chief_name, cook, cook_name
) {
    const container = document.createElement('div');
    console.log(container);
    const breakfast = `
        <div class="menu__slide" data-meal="breakfast" data-side="right">
            <img class="menu__img" src="img/left-side-img/1-left-min.jpg" alt="1-left-min">
            <div class="menu__description">
                CreateTemplateHeaderBlock(${date}, ${day}, ${diet});
                CreateTemplateTitle(${meal_title_name});
                <ul class="menu__meals-block">
                    CreateTemplateDish(${dish_1_name}, ${dish_1_output});
                    CreateTemplateDish(${dish_2_name}, ${dish_2_output});
                    CreateTemplateDish(${dish_3_name}, ${dish_3_output});
                </ul>
                <ul class="menu__footer-block">
                    CreateTemplateResponsible(${chief_position}, ${chief_name}, ${cook}, ${cook_name});
                </ul>
            </div>
     `
    console.log(breakfast);
    return breakfast;
}
// DINNER Template
function CreateTemplateDinner(
    date, day, diet, meal_title_name, dish_1_name, dish_1_output, dish_2_name,
    dish_2_output, dish_3_name, dish_3_output, dish_4_name, dish_4_output,
    chief_position, chief_name, cook, cook_name
) {
    const dinner = `
        <div class="menu__slide" data-meal="dinner" data-side="left">
            <img class="menu__img" src="img/right-side-img/1-right-min.jpg" alt="1-right-min">
            <div class="menu__description">
                CreateTemplateHeaderBlock(${date}, ${day}, ${diet});
                CreateTemplateTitle(${meal_title_name});
                <ul class="menu__meals-block">
                    CreateTemplateDish(${dish_1_name}, ${dish_1_output});
                    CreateTemplateDish(${dish_2_name}, ${dish_2_output});
                    CreateTemplateDish(${dish_3_name}, ${dish_3_output});
                    CreateTemplateDish(${dish_4_name}, ${dish_4_output});
                </ul>
                <ul class="menu__footer-block">
                    CreateTemplateResponsible(${chief_position}, ${chief_name}, ${cook}, ${cook_name});
                </ul>
            </div>
        </div>
    `
    console.log(dinner)
    return dinner;
}
// DINNER Template
function CreateTemplateSupper(
    date, day, diet, meal_title_name, dish_1_name, dish_1_output, dish_2_name,
    dish_2_output, chief_position, chief_name, cook, cook_name
) {
    const supper = `
        <div class="menu__slide" data-meal="supper" data-side="right">
            <img class="menu__img" src="img/left-side-img/1-left-min.jpg" alt="1-left-min">
            <div class="menu__description">
                CreateTemplateHeaderBlock(${date}, ${day}, ${diet});
                CreateTemplateTitle(${meal_title_name});
                <ul class="menu__meals-block">
                    CreateTemplateDish(${dish_1_name}, ${dish_1_output});
                    CreateTemplateDish(${dish_2_name}, ${dish_2_output});
                </ul>
                <ul class="menu__footer-block">
                    CreateTemplateResponsible(${chief_position}, ${chief_name}, ${cook}, ${cook_name});
                </ul>
            </div>
        </div>
    `
    console.log(supper);
    return supper;
}

function CreateTemplateHeaderBlock(date, day, diet) {
    return `
        <div class="menu__header-block">
            <div class="menu__diet">${diet}</div>
            <div class="menu__date">
                <span class="menu__date-day">${day}</span>
                <span class="menu__date-data">${date}</span>
            </div>
        </div>
    `;
}
function CreateTemplateTitle(meal_title_name) {
    return `<div class="menu__title">${meal_title_name}</div>`
}
function CreateTemplateDish(dish_name, dish_output) {
    return `
        <li class="menu__meals-item">
            <p class="menu__meals-name">${dish_name}</p>
            <span class="menu__meals-output">${dish_output}</span>
        </li>
    `
}
function CreateTemplateResponsible(chief_position, chief_name, cook, cook_name) {
    return `
        <li class="menu__responsible-item">
            <p class="menu__meals-name">${chief_position}</p>
            <span class="menu__meals-output">${chief_name}</span>
        </li>
        <li class="menu__responsible-item">
            <p class="menu__responsible-chief">${cook}</p>
            <span class="menu__responsible-cook">${cook_name}</span>
        </li>
    `
}
