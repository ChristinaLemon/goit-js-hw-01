'use strict';
const PRINT_COUNTRY =
  'Напишите название страны в которую нужно доставить товар:';

const CHINA = 'Китай';
const CHILI = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

let price = 0;
let currentCountry = '';
let formattedUserInput = '';
let message = '';

let userInput = prompt(PRINT_COUNTRY);

if (userInput) {
  formattedUserInput = userInput.toLowerCase();

  switch (formattedUserInput) {
    case CHINA.toLowerCase():
      price = 100;
      currentCountry = CHINA;
      break;

    case CHILI.toLowerCase():
      price = 250;
      currentCountry = CHILI;
      break;

    case AUSTRALIA.toLowerCase():
      price = 170;
      currentCountry = AUSTRALIA;
      break;

    case INDIA.toLowerCase():
      price = 80;
      currentCountry = INDIA;
      break;

    case JAMAICA.toLowerCase():
      price = 120;
      currentCountry = JAMAICA;
      break;

    default:
      break;
  }

  message =
    price === 0
      ? 'В вашей стране доставка не доступна'
      : `Доставка в ${currentCountry} будет стоить ${price} кредитов`;
} else {
  message = 'Отменено пользователем!';
}

alert(message);
