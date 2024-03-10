const AllImages  = document.querySelectorAll('img');
const menu = document.getElementById('menu');
const loader = document.getElementById('loader');
const date = new Date();
const formattedDate = date.toLocaleDateString();
const breakfastSlide = document.getElementById('breakfastSlide');
const dinnerSlide = document.getElementById('breakfastSlide');
const supperSlide = document.getElementById('breakfastSlide');
//Breakfast
const breakfastSlideImage = document.getElementById('breakfastSlide__img');
const breakfastSlideDiet = document.getElementById('breakfastSlide__diet');
const breakfastSlideDay = document.getElementById('breakfastSlide__day');
const breakfastSlideDate = document.getElementById('breakfastSlide__date');
const breakfastSlideMealName = document.getElementById('breakfastSlide__meal-name');
const breakfastSlideMeal1Name = document.getElementById('breakfastSlide__meal-1-name');
const breakfastSlideMeal1Output = document.getElementById('breakfastSlide__meal-1-output');
const breakfastSlideMeal2Name = document.getElementById('breakfastSlide__meal-2-name');
const breakfastSlideMeal2Output = document.getElementById('breakfastSlide__meal-2-output');
const breakfastSlideMeal3Name = document.getElementById('breakfastSlide__meal-3-name');
const breakfastSlideMeal3Output = document.getElementById('breakfastSlide__meal-3-output');
//Dinner
const dinnerSlideImage = document.getElementById('dinnerSlide__img');
const dinnerSlideDiet = document.getElementById('dinnerSlide__diet');
const dinnerSlideDay = document.getElementById('dinnerSlide__day');
const dinnerSlideDate = document.getElementById('dinnerSlide__date');
const dinnerSlideMealName = document.getElementById('dinnerSlide__meal-name');
const dinnerSlideMeal1Name = document.getElementById('dinnerSlide__meal-1-name');
const dinnerSlideMeal1Output = document.getElementById('dinnerSlide__meal-1-output');
const dinnerSlideMeal2Name = document.getElementById('dinnerSlide__meal-2-name');
const dinnerSlideMeal2Output = document.getElementById('dinnerSlide__meal-2-output');
const dinnerSlideMeal3Name = document.getElementById('dinnerSlide__meal-3-name');
const dinnerSlideMeal3Output = document.getElementById('dinnerSlide__meal-3-output');
const dinnerSlideMeal4Name = document.getElementById('dinnerSlide__meal-4-name');
const dinnerSlideMeal4Output = document.getElementById('dinnerSlide__meal-4-output');
//Responsible
const chiefPosition = document.querySelector('.menu__responsible-chief-position');
const chiefName = document.querySelector('.menu__responsible-chief-name');
const cookPosition = document.querySelector('.menu__responsible-cook-position');
const cookName = document.querySelector('.menu__responsible-cook-name');
const WeekMenu = {
    // 1 week
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
                name: `йогурт`,
                output: '115'
            },
        },
        dinner: {
            name: 'Обід',
            dish_1: {
                name: `Ікра бурячкова`,
                output: '120'
            },
            dish_2: {
                name: `Капусняк «Львівський», сметана`,
                output: '500/18'
            },
            dish_3: {
                name: `Биточок смажений з кашею рисовою розсипчастою з маслом вершковим`,
                output: '271/98'
            },
            dish_4: {
                name: `Хліб, компот, фрукт`,
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
    // 2 week
    '11.03.2024': {
        day: 'Понеділок',
        diet: 'Дієта №15',
        breakfast: {
            name: 'Сніданок',
            dish_1: {
                name: 'Сардельки варені з кашею вівсяною з маслом вершковим',
                output: '405/140'
            },
            dish_2: {
                name: 'Хліб, масло, цукор, чай з лимоном, сир твердий',
                output: '250'
            },
            dish_3: {
                name: `йогурт`,
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
                name: `<i>III страва:  </i>Хліб, кисіль, фрукт`,
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
                name: 'Хліб, масло, цукор, чай з лимоном, яйце',
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
    '12.03.2024': {
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
                name: 'Хліб, масло, цукор, чай з лимоном, яйце',
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
    '13.03.2024': {
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
                name: `<i>III страва:  </i>Хліб, сік, фрукт`,
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
                name: 'Хліб, масло, цукор, чай з лимоном, яйце',
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
    '14.03.2024': {
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
                name: 'М’ясо смажене з кашею пшоняною в’язкою з маслом вершковим',
                output: '277/52'
            },
            dish_2: {
                name: 'Хліб, масло, цукор, чай з лимоном, яйце',
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
    '15.03.2024': {
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
                name: `<i>III страва:  </i>Хліб, кисіль, фрукт`,
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
                name: 'Хліб, масло, цукор, чай з лимоном, яйце',
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
    '16.03.2024': {
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
                name: `<i>III страва:  </i>Хліб, сік, фрукт`,
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
                name: 'Хліб, масло, цукор, чай з лимоном, яйце',
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
    '17.03.2024': {
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
                output: '96'
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
                name: 'Хліб, масло, цукор, чай з лимоном, яйце',
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
}

//Main Scenario
$(document).ready(function(){
    // checkImages();
    setTimeout(() => {
        runCarousel();
    }, 1000);
    // reloadPage();
})

// Build Menu
function BuildMenu() {
    for (const key in WeekMenu) {
        if (formattedDate === key) {
            setBreakfastContent(key, WeekMenu[key]);
            setDinnerContent(key, WeekMenu[key]);
            setResponsible(WeekMenu[key]);
            // CreateTemplateBreakfast(key, WeekMenu[key]);
            // CreateTemplateDinner(key, WeekMenu[key]);
            // CreateTemplateSupper(key, WeekMenu[key]);
        }
    }
}
// Run carousel
function runCarousel() {
    $('#menu').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 45000,
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

function setBreakfastContent(date, menu_key) {
    breakfastSlideImage.setAttribute('src', 'img/left-side-img/1-left-min.jpg');
    breakfastSlideImage.setAttribute('alt', '1-left-min');
    breakfastSlideDiet.textContent = menu_key.diet;
    breakfastSlideDay.textContent =  menu_key.day;
    breakfastSlideDate.textContent = date;
    breakfastSlideMealName.textContent = menu_key.breakfast.name;
    breakfastSlideMeal1Name.textContent = menu_key.breakfast.dish_1.name;
    breakfastSlideMeal1Output.textContent = menu_key.breakfast.dish_1.output;
    breakfastSlideMeal2Name.textContent = menu_key.breakfast.dish_2.name;
    breakfastSlideMeal2Output.textContent = menu_key.breakfast.dish_2.output;
    breakfastSlideMeal3Name.textContent = menu_key.breakfast.dish_3.name;
    breakfastSlideMeal3Output.textContent = menu_key.breakfast.dish_3.output;
}
function setDinnerContent(date, menu_key) {
    dinnerSlideImage.setAttribute('src', 'img/right-side-img/1-right-min.jpg');
    dinnerSlideImage.setAttribute('alt', '1-right-min');
    dinnerSlideDiet.textContent = menu_key.diet;
    dinnerSlideDay.textContent =  menu_key.day;
    dinnerSlideDate.textContent = date;
    dinnerSlideMealName.textContent = menu_key.dinner.name;
    dinnerSlideMeal1Name.textContent = menu_key.dinner.dish_1.name;
    dinnerSlideMeal1Output.textContent = menu_key.dinner.dish_1.output;
    dinnerSlideMeal2Name.textContent = menu_key.dinner.dish_2.name;
    dinnerSlideMeal2Output.textContent = menu_key.dinner.dish_2.output;
    dinnerSlideMeal3Name.textContent = menu_key.dinner.dish_3.name;
    dinnerSlideMeal3Output.textContent = menu_key.dinner.dish_3.output;
    dinnerSlideMeal4Name.textContent = menu_key.dinner.dish_4.name;
    dinnerSlideMeal4Output.textContent = menu_key.dinner.dish_4.output;
}

function setResponsible(menu_key) {
    chiefPosition.textContent = menu_key.responsive.chief_position;
    chiefName.textContent = menu_key.responsive.chief_name;
    cookPosition.textContent = menu_key.responsive.cook;
    cookName.textContent = menu_key.responsive.cook_name;
}


// BREAKFAST Template
function CreateTemplateBreakfast(date, menu_key) {
    const breakfast = `
        <div class="menu__slide" id="breakfast" data-meal="breakfast" data-side="right">
            <img class="menu__img" src="img/right-side-img/1-right-min.jpg" alt="1-right-min">
            <div class="menu__description">
                ${CreateTemplateHeaderBlock(date, menu_key.day, menu_key.diet)}
                ${CreateTemplateTitle(menu_key.breakfast.name)}
            <ul class="menu__meals-block">
                ${CreateTemplateDish(menu_key.breakfast.dish_1.name, menu_key.breakfast.dish_1.output)}
                ${CreateTemplateDish(menu_key.breakfast.dish_2.name, menu_key.breakfast.dish_2.output)}
                ${CreateTemplateDish(menu_key.breakfast.dish_3.name, menu_key.breakfast.dish_3.output)}
            </ul>
            <ul class="menu__footer-block">
                ${CreateTemplateResponsible(
                    menu_key.responsive.chief_position,
                    menu_key.responsive.chief_name,
                    menu_key.responsive.cook,
                    menu_key.responsive.cook_name
                )}
            </ul>
        </div>
    `
    menu.insertAdjacentHTML('afterbegin', breakfast);
}
// DINNER Template
function CreateTemplateDinner(date, menu_key) {
    const dinner = `
        <div class="menu__slide" id="dinner" data-meal="dinner" data-side="left">
            <img class="menu__img" src="img/left-side-img/2-left-min.jpg" alt="2-left-min">
            <div class="menu__description">
                ${CreateTemplateHeaderBlock(date, menu_key.day, menu_key.diet)}
                ${CreateTemplateTitle(menu_key.dinner.name)}
                <ul class="menu__meals-block">
                    ${CreateTemplateDish(menu_key.dinner.dish_1.name, menu_key.dinner.dish_1.output)}
                    ${CreateTemplateDish(menu_key.dinner.dish_2.name, menu_key.dinner.dish_2.output)}
                    ${CreateTemplateDish(menu_key.dinner.dish_3.name, menu_key.dinner.dish_3.output)}
                    ${CreateTemplateDish(menu_key.dinner.dish_4.name, menu_key.dinner.dish_4.output)}
                </ul>
                <ul class="menu__footer-block">
                    ${CreateTemplateResponsible(
                        menu_key.responsive.chief_position,
                        menu_key.responsive.chief_name,
                        menu_key.responsive.cook,
                        menu_key.responsive.cook_name
                    )}
                </ul>
            </div>
        </div>
    `

    document.getElementById('breakfast').insertAdjacentHTML('afterend', dinner);
}
// SUPPER Template
function CreateTemplateSupper(date, menu_key) {
    const supper = `
        <div class="menu__slide" id="supper" data-meal="supper" data-side="right">
            <img class="menu__img" src="img/right-side-img/4-right-min.jpg" alt="4-right-min">
            <div class="menu__description">
                ${CreateTemplateHeaderBlock(date, menu_key.day, menu_key.diet)}
                ${CreateTemplateTitle(menu_key.supper.name)}
                <ul class="menu__meals-block">
                    ${CreateTemplateDish(menu_key.supper.dish_1.name, menu_key.supper.dish_1.output)}
                    ${CreateTemplateDish(menu_key.supper.dish_2.name, menu_key.supper.dish_2.output)}
                </ul>
                <ul class="menu__footer-block">
                    ${CreateTemplateResponsible(
                        menu_key.responsive.chief_position,
                        menu_key.responsive.chief_name,
                        menu_key.responsive.cook,
                        menu_key.responsive.cook_name
                    )}
                </ul>
            </div>
        </div>
    `
    document.getElementById('dinner').insertAdjacentHTML('afterend', supper);
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

BuildMenu();

