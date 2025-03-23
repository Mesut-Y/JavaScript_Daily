"use strict";
//Map -> key-value

const map1 = new Map();
map1.set("1","İstanbul"); //istenen tipte atama yapılabilir.
map1.set(2,"Ankara");
map1.set(3,"İzmir");
map1.set([4,5],{4:"Bursa",5:"Van"});
map1.set(true,"Sivas");
let value1 = "Tokat";
map1.set("6",value1);

console.log(map1);

const cities = new Map();
cities.set(1,"Adana");
cities.set(2,"Adıyaman");
cities.set(3,"Afyon");
cities.set(6,"Ankara");
cities.set(34,"İstanbul");
cities.set(41,"Kocaeli");
cities.set(54,"Sakarya");
console.log(cities);

console.log(cities.get(34));
console.log("cities isimli map eleman sayısı: ",cities.size);  //map eleman sayısı

cities.delete(41); //mapten eleman silme
console.log(cities);

console.log("cities mapinde Ankara var mı?",cities.has(6)," ",cities.has("Ankara")); //has eleman var mı? sorgusu key ile yapılır.
//value varlığı kontrolü için
console.log("Ankara değeri için value kontrolü(incldue): ",Array.from(cities.values()).includes("Ankara"));
console.log("Ankara değeri için value kontrolü(spread-some-arrow function): ", [...cities.values()].some(val => val==="Ankara")); //some koşul
console.log("Ankara değeri için value kontrolü(spread-find-arrow function): ", [...cities.values()].find(val => val==="Ankara")); //some koşul

console.log("------------for of döngüsü ---------------");
for(let kv of cities){  //distructing
    console.log(kv);
}
console.log("------ for of döngüsü ve distructing-------");
for(let [key,value] of cities){  //distructing
    console.log(key,"elemanı: ",value);
}
console.log("------------ for of döngüsü ---------------");
for(let val of cities.values()){
    console.log(val);
}
console.log("------ array.from ve for in döngüsü -------");
const keys = Array.from(cities.keys());
for(let i in keys){
    console.log(i);
}
console.log("-------- foreach arrow function  ---------");
keys.forEach((key)=>{
    console.log(key, cities.get(key));
})

// keys.forEach(function (key){
//     console.log(key);
// })

console.log("-------- map -> array dönüşümü  ---------");
let array = Array.from(cities);
array.forEach(deger=>{
   console.log(deger[0], deger[1]);
})

console.log("-------- array -> map dönüşümü  ---------");
const arrayCities = [
    [81, "Düzce"],
    [80, "Osmaniye"],
    [79, "Kilis"]
]

const arrayToMap = new Map(arrayCities);
console.log(arrayToMap);

