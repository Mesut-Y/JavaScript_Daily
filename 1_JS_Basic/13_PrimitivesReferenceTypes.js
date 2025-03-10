//primitive variables only save a value
let num1 = 5;
let num2 = num1;
num1 = 6;
console.log("num1 5 iken 6 ataması yapılmıştır: ", num1, "num2=num1 olmasına rağmen num2: ", num2);

//reference variable only save a memory address
console.log("------------------------------------------------------------");
let array1 = [1,2,3,4];
console.log("Dizilerin tipi: ", typeof array1, " Değerleri: ", array1);

console.log("------------------------------------------------------------");
let array2 = array1;
console.log("array2=array1 komutuyla atanmıştı.");
console.log("array1 ve array2 eşit mi kontrolü =>", array1 == array2 ? "EŞİT" : "EŞİT DEĞİL");

console.log("------------------------------------------------------------");
let array3 = [1,2,3,4];
console.log("array3 1,2,3,4 değerleriyle oluşturuldu.");
console.log("array1 ve array3 eşit mi kontrolü =>", array1 == array3 ? "EŞİT" : "EŞİT DEĞİL");


console.log("-------------------------------------------------------------");
console.log("array1 ve array3 değerleri eşit mi? ", array1.join()==array3.join() ? "EŞİT":"EŞİT DEĞİL" );

console.log("-------------------------------------------------------------");
array1.push(5);
console.log("array2=array1 atamasından sonra, array1'e 5 elemanı eklenince array2 değişimi: ", array2);
console.log("array1 5 elemanı eklenince array3 değişimi: ", array3);