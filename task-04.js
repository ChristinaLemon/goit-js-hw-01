'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const result = prompt('Какое количество дроидов Вы желаете приобрести?');
let totalPrice = 0;
let balance = 0;

if (result === null) {
  alert('Отменено пользователем!');
} else if (pricePerDroid * result >= credits) {
  alert('Недостаточно средств на счету!');
} else if (pricePerDroid * result <= credits) {
  totalPrice = result * pricePerDroid;
  balance = credits - totalPrice;
  alert(`Вы купили ${result} дроидов, на счету осталось ${balance} кредитов.`);
}

alert(`${balance}`);
