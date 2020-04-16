'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const result = prompt('Какое количество дроидов Вы желаете приобрести?');
let totalPrice = 0;
let balance = 0;
let num = Number(result);

if (result === null) {
  alert('Отменено пользователем!');
} else if (Number.isNaN(num)) {
  alert('Было введено не число, попробуйте еще раз');
} else {
  totalPrice = result * pricePerDroid;

  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    balance = credits - totalPrice;
    alert(
      `Вы купили ${result} дроидов, на счету осталось ${balance} кредитов.`,
    );
  }
}
alert(`${balance}`);
