let num1 = 5;
let num2 = "10";
let num3 = "3.14"
console.log("Sayılar toplamı: ", num1+num2); //Output -> 510 (incorrect)
console.log("Sayılar Toplamı: ", num1+Number(num2)); //Output ->15 (Correct)

console.log(num1+parseInt(num2)); //window.parseInt
console.log(num1+parseFloat(num3)); //window.parseFloat
console.log(parseInt(num3)); // "3.14" değerinin tamsayı kısmı dönüştürülür.

console.log("String dönüşüm için 1. yöntem: ", String(num1), typeof String(num1));
console.log("String dönüşüm için 2. yöntem ", (num1).toString(), typeof (num1).toString());

let array = [0,1,2,3,4];
console.log("array tipi", typeof array);
console.log("String(array) tip dönüşümü: ", typeof String(array));

