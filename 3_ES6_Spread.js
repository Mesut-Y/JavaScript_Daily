let numbers =[10,20,30,40];

const add = (a,b,c,d) => {
    return (a+b+c+d);
}

//Eski Yöntem
console.log("Eski Yöntem: ", add(numbers[0],numbers[1],numbers[2],numbers[3]));

//Spread
console.log("Yeni Yöntem: ", add(...numbers));

let languages1 = ["Java", "C#", "JavaScript"];
let languages2 = ["PHP", "Python", languages1[0], languages1[1], languages1[2]]; //Eski Yöntem
let languages3 = languages1.concat(languages2);

console.log("Eski Yöntem1: ", languages2);
console.log("Concat Metodu Kullanımı: ", languages3);

const months1 = ["April", "May", "June"];
const months2 = ["January", "February", ...months1]; //Spread

console.log("Spread Kullanımı: ", months2);







