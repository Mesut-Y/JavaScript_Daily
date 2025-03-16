//window.sessionStorage;
//window.localStorage;


sessionStorage.setItem("1","Narin"); //key-value stringtir.
sessionStorage.setItem(2,"Burak");
sessionStorage.setItem(3,"Burcu");
sessionStorage.setItem("4","Duran");
sessionStorage.setItem(101,1);

console.log("101 keyi 1 value tipi: ", typeof sessionStorage.getItem(101));

sessionStorage.removeItem(4);

let value = sessionStorage.getItem(101); //4 deneyebilirsin.
if (value == null){
    console.log("Aradığınız kişi bulunamadı.")}
else{
    console.log(value);}

let names = ["Ali","Aslı","Aylin","Arzu","Alp"];

sessionStorage.setItem(5,JSON.stringify(names)); //JSON.stringfy dizi gibi kaydetti.
let value2 = JSON.parse(sessionStorage.getItem(5)); //JSON.parse dizi gibi döndü.
console.log(value2);

value2.forEach(function (item){
    console.log(item);
});

//sessionStorage.clear();  //hepsini siler

// let value3 = sessionStorage.getItem(5).split(","); //olmuyor çünkü [ ve " sembollerini alıyor.
// let value3 = Array.from(sessionStorage.getItem(5)); // olmuyor tüm karakterleri dizi yapıyor.
// console.log(value3);
// value3.forEach(function (item){
//     console.log(item);
// });

localStorage.clear();
localStorage.setItem("1", "January"); //key-value stringtir.
localStorage.setItem(2, "February");
localStorage.setItem(3,"March");
localStorage.setItem("4","April");
localStorage.setItem(5,"May");

let value3 = localStorage.getItem(4);
console.log("LocalStorage 4.değer: ",value3);

let months = ["June", "July", "August", "September", "October", "November", "December"];
localStorage.setItem("months", JSON.stringify(months));
let value4 = JSON.parse(localStorage.getItem("months"));
console.log(value4);
value4.forEach(function (item) {
    console.log(item);
});
