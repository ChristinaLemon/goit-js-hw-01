'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

const result = prompt('Введите пароль!');

if (result === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (result === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
