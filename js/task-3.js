const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let checkPassword = prompt('Enter admin password');

if (checkPassword === null) {
    message = 'Отменено пользователем!';
} else if (checkPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);