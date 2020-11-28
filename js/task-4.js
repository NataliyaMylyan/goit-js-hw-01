const credits = 23580;
const pricePerDoid = 3000;
let totalprice;

let numberOfDroids = prompt('Enter number of droids you would like to buy');

if (numberOfDroids === null){
    console.log('Отменено пользователем!');}
    else {totalprice = numberOfDroids * pricePerDoid;
        if (totalprice > credits) {
            console.log('Недостаточно средств на счету!');}
            else {
                console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalprice} кредитов.`);
            }
    }

