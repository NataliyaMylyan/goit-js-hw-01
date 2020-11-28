
// ВАРИАНТ З ЦИКЛОМ FOR
let input = 0;
let total;

for(total = 0; input != null; total += Number(input)) {
    input = prompt('Введите число');
}
alert(`Общая сумма чисел равна ${total}`);





// ВАРИАНТ З ЦИКЛОМ WHILE
// let input;
// let total = 0;


// while(true) {
//     input = prompt('Введите число');
//     if (input === null) {
//         alert(`Общая сумма чисел равна ${total}`);
//         break;
//     }
//     total += Number(input);
// }