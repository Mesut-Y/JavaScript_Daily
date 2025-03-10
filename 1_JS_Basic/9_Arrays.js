let array1=[0,1,2,3,4,5,6,7,8,9];

let array2=[0,"Mesut",null,3.14,'?',undefined,"Y",true];

console.log("Dizi Elemanları: ", array2);
console.log(array2[7]);
console.log(array2[array2.length-1]);

let months = new Array("January", "February", "March", "April", "May");
months.forEach(function(item){
    console.log(item);
});

//***************** Functions Of Arrays ******************//
/*
pop     : REMOVES element from the END of the array and returns the length of the array.
push    : ADDS an element to the END of the array and returns the length of the array.

shift   : REMOVES element from the START of the array and returns the length of the array.
unshift : ADDS an element to the START of the array and returns the length of the array.

splice(startindex, removepieces, item1,item2,..,itemn): add or delete element to array BY PREFERENCE.

toString: diziyi stringe çevirir.
join("-"): diziyi stringe çevirir. Ayrıca sembol ekler.
split("-"): belirli işarete göre stringi bölüp diziye çevirir.

concat  : iki dizi birleştirir.
slice(startindex, endindex)   : diziyi istenilen yerden ikiye bölüp yeni dizi yapar.

reverse : ORJİNAL dizi elemanlarını ters çevirir.
indexOf : dizi elemanının index numarasını verir. Aranan eleman yoksa -1 döner.
includes: dizi eleman içeriyor mu sorgusunu yapar. true/false
length  : dizinin uzunluk özelliği  (index = length -1)
*/

console.log("Dizinin orjinal dizilimi: ", months);

months.pop(); //also returns the number of elements as number //months.splice(months.length-1,1);
console.log("pop ile son eleman silindi: ", months);

months.push("May"); //also returns the number of elements as number //months.splice(months.length,0,"May");
console.log("push ile son eleman eklendi: ", months);


months.shift(); //also returns the number of elements as number //months.splice(0,1);
console.log("shift ile ilk eleman silindi: ", months);

months.unshift("January"); //also returns the number of elements as number months.splice(0,0,"January");
console.log("shift ile ilk eleman eklendi: ", months);

months.splice(2,1,"extra1","extra2","extra3"); //Returns the removed elements array
console.log("splice ile 2.index ten 1 eleman sil ve ekstraları ekle: ", months);

let count = months.splice(2,3,"March"); //Returns the removed elements array
console.log("splice ile 2.index ten 3 eleman sil ve \"March\" ekle: ", months);
console.log("son splice işleminde silinen elemanlar: ", count);

console.log("toString ile dizi stringe çevirildi: ", months.toString());

let monthsString = months.join("-"); //Converts the array to a string with the specified symbol.
console.log("join ile dizi sembol ile stringe çevrildi: ",  monthsString);

let monthsArray = monthsString.split("-"); //Converts a string to an array with the specified symbol.
console.log("split ile string sembol ile diziye dönüştürüldü: ", monthsArray);

let months2 = ["June", "July", "August", "September", "October", "November", "December"];
let allMonths = months.concat(months2); //Combines arrays and returns a new array
console.log("concat ile iki dizi birleştirildi: ", allMonths);

console.log("slice ile ilk indeksten son indekse kadar yeni dizi yapar: ",allMonths.slice(0,5));
//not including the last index.

allMonths.reverse(); //reverse original array
console.log("reverse ile dizi ters çevrilir.", allMonths);

console.log("indexOf ile eleman indeksi bulunur: ", allMonths.indexOf("November"));
//If the element you are looking for does not exist, -1 is returned.

console.log("include ile dizinin elemanı içerdiği sorgulanır: ", allMonths.includes("December"));
// if(allMonths.indexOf("December") == -1) { console.log("false");  }

console.log("length özelliği dizi uzunluğu(eleman sayısı) gösterir: ", allMonths.length);
//The array length (number of elements) is 1 more than the index. 

