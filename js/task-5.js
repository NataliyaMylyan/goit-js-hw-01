let country = prompt('Введите страну');
let credits;
let countryList = true;
country = country.toLowerCase();

switch (country) {
    case 'китай': country = 'Китай'; credits = 100; break;
    case 'чили': country = 'Чили'; credits = 250; break;
    case 'австралия': country = 'Австралия'; credits = 170; break;
    case 'индия': country = 'Индия'; credits = 80; break;
    case 'ямайка': country = 'Ямайка'; credits = 120; break;

    default: countryList = false;
}

if (countryList === true) { console.log(`Доставка в ${country} будет стоить ${credits} кредитов`); }
else {
    alert('В вашей стране доставка не доступна');
}
