// "use strict"; // kullanılırsa 26. satır letsiz hata verir.

let cities = ["İstanbul", "Ankara", "Artvin", "Muğla", "Mardin"];
let city1, city2, city3, city4, city5;

// //Eski Yöntem
// city1 = cities[0];
// city2 = cities[1];
// city3 = cities[2];
// city4 = cities[3];
// city5 = cities[4];

//Destructing
[city1, city2, city3, city4, city5] = cities;

console.log(city1, city2, city3, city4, city5);

const calculate = (num1, num2) =>{
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
    return [addition, subtraction, multiplication, division];
}

let [add, sub, mul, div] = calculate(10,2); //let silince hata vermez default var tanımlar.
console.log(add, sub, mul, div);

const car = {
    brand : "TOGG",
    model : "T10X",
    year : 2024,
    color : "red"
}

// let marka, model, sene, renk;
// //Eski Yöntem
// marka = car.brand;
// model = car.model;
// sene = car.year;
// renk = car.color;
// console.log(marka, model, sene, renk);

// Destructing
// let {brand, model, year, color} = car;
// console.log(brand, model, year, color);

// Destructing
let {brand:marka, model:model, year:sene, color:renk} = car; //nesne attribute ları yeni değişken isimlerine atandı.
console.log(marka, model, sene, renk);