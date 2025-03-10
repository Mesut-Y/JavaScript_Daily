/*
1- Number 
2- String
3- Boolean
4- Null
5- Undefined
6- Object
7- Function
*/

let c = 11;
let d = 22;
console.log(c+d);
console.log(typeof c); //tipini gösterir.
let e = 1.4;
console.log("float ve integer toplamı: ", c+d+e, "tipi: ", typeof(c+d+e))

let name = "MesutY";
let a = "11";
let b = "22";
console.log(a+b); 
//tırnak içinde rakamlar number değil string olur.

const boolDurum = true;
console.log(boolDurum);
console.log(3>10);

var temporary = null; // null da olsa obje tanımlanmıştır.
console.log("null değişken tipi: " + typeof temporary);


var no;  //it is initialized but undefined.
console.log("başlatılmış ama tanımlanmamış değişken tipi: "+ typeof no)

//primitive ve referans değişken tipleri, object ve functionlar referanstır

let dog = {
    name : "Zeytin",
    age : 3
}
console.log("dog objesinin tipi:" , typeof dog)

let numbers=[0,1,2,3,4,5,6];
console.log("array:", numbers, "  tipi: ", typeof numbers);

let greeting = function(){
    console.log("merhabalar");
}
console.log("fonksiyon içeriği: ", greeting, " tipi: ", typeof greeting);
console.log(" ");
console.log("fonksiyon çalışması: ", greeting(), " tipi: ", typeof greeting);

