'use strict';

let input;
let total = 0;
let result;

while (input !== null) {
  input = prompt('Введите число:');

  if (input !== null) {
    let num = Number(input);

    if (Number.isNaN(num)) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      total += num;
    }
  }
}

alert(`Общая сумма чисел равна ${total}`);
