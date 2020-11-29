const credits = 23580;
const pricePerDroid = 3000;
let totalprice;
let message;

let numberOfDroids = prompt("Введите количество дроидов для покупки:");

if (numberOfDroids === null) {
  message = "Отменено пользователем!";
} else {
  totalprice = numberOfDroids * pricePerDroid;
  if (totalprice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalprice} кредитов.`;
  }
}

console.log(message);








// ВАРІАНТ, ВИКОНАНИЙ ДО РЕКОМЕНДАЦІЙ МЕНТОРА
// const credits = 23580;
// const pricePerDoid = 3000;
// let totalprice;

// let numberOfDroids = prompt('Enter number of droids you would like to buy');

// if (numberOfDroids === null){
//     console.log('Отменено пользователем!');}
//     else {totalprice = numberOfDroids * pricePerDoid;
//         if (totalprice > credits) {
//             console.log('Недостаточно средств на счету!');}
//             else {
//                 console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalprice} кредитов.`);
//             }
//     }
