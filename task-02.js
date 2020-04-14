'use strict';

const total = 100;

const ordered = 120;

let result;

if (ordered <= total) {
  result = `"Заказ оформлен, с вами свяжется менеджер"`;
} else {
  result = `"На складе недостаточно товаров!"`;
}

console.log(result);
