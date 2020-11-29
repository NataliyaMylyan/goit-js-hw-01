const total = 100;
const ordered = prompt('Введите количество товаров в заказе:');

const message = ordered < total ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно твоаров!';

console.log(message);






// ВАРІАНТИ ДО РЕКОМЕНДАЦІЙ МЕНТОРА
// ВАРИАНТ 1
// const total = 100;
// let ordered = 50;

// if (ordered > total) {
//     console.log('На складе недостаточно твоаров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// ordered = 20;

// if (ordered > total) {
//     console.log('На складе недостаточно твоаров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// ordered = 80;

// if (ordered > total) {
//     console.log('На складе недостаточно твоаров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// ordered = 130;

// if (ordered > total) {
//     console.log('На складе недостаточно твоаров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }



// ВАРИАНТ 2
// const total = 100;
// let ordered = 50;

// if (ordered > total) {
// console.log(`"${ordered} > ${total} На складе недостаточно твоаров!"`);
// } else {
// console.log(`"${ordered} < ${total} Заказ оформлен, с вами свяжется менеджер"`);
// }

// ordered = prompt('Enter 20');
// if (ordered > total) {
//     console.log(`"${ordered} > ${total} На складе недостаточно твоаров!"`);
// } else {
// console.log(`"${ordered} < ${total} Заказ оформлен, с вами свяжется менеджер"`);
// }

// ordered = prompt('Enter 80');
// if (ordered > total) {
//         console.log(`"${ordered} > ${total} На складе недостаточно твоаров!"`);
// } else {
// console.log(`"${ordered} < ${total} Заказ оформлен, с вами свяжется менеджер"`);
// }

// ordered = prompt('Enter 130');
// if (ordered > total) {
//             console.log(`"${ordered} > ${total} На складе недостаточно твоаров!"`);
//         } else {
//         console.log(`"${ordered} < ${total} Заказ оформлен, с вами свяжется менеджер"`);
//         }
        