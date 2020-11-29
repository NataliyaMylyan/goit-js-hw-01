const ADMIN_PASSWORD = 'jqueryismyjam';
const messageCancelled = 'Отменено пользователем!';
const messageVerified = 'Добро пожаловать!';
const messageError = "Доступ запрещен, неверный пароль!";
let message;

let checkPassword = prompt('Введите пароль администратора:');

if (checkPassword === null) {
  message = messageCancelled;
} else if (checkPassword === ADMIN_PASSWORD) {
  message = messageVerified;
} else {
  message = messageError;
}

alert(message);
