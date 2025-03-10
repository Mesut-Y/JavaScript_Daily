let number1 = 3.2;
let number2 = 3.5;
let number3 = 3.7;

console.log("Sayıların orjinali", number1);
console.log("Sayıların orjinali", number2);
console.log("Sayıların orjinali", number3);
console.log("-------------------------------------Floor----------------------------------------");
console.log("Floor ile değişken aşağı yuvarlanır: ", Math.floor(number1));
console.log("Floor ile değişken aşağı yuvarlanır: ", Math.floor(number2));
console.log("Floor ile değişken aşağı yuvarlanır: ", Math.floor(number3));
console.log("--------------------------------------Ceil--------------------------------------");
console.log("Ceil ile değişken yukarı yuvarlanır: ", Math.ceil(number1));
console.log("Ceil ile değişken yukarı yuvarlanır: ", Math.ceil(number2));
console.log("Ceil ile değişken yukarı yuvarlanır: ", Math.ceil(number3));
console.log("-------------------------------------Round----------------------------------------");
console.log("Round ile değişken matematiksel yuvarlanır: ", Math.round(number1));
console.log("Round ile değişken matematiksel yuvarlanır: ", Math.round(number2));
console.log("Round ile değişken matematiksel yuvarlanır: ", Math.round(number3));
console.log("--------------------------------------Max---------------------------------------");
console.log("Max ile dizideki maksimum sayı bulunur. ", Math.max(3,4,5,5,6,7,8,9,100));
console.log("--------------------------------------Min---------------------------------------");
console.log("Min ile dizideki minimum sayı bulunur. ", Math.min(3,4,5,5,6,7,8,9,100));
console.log("--------------------------------------Random---------------------------------------");
console.log("Random ile 0-1 sayı rasgele üretilir. ", Math.floor(Math.random()*101));

console.log("--------------------------------------Abs---------------------------------------");
console.log("Abs ile absolute gerçek değer bulunur. ", Math.abs(3-10));

console.log("--------------------------------------Sqrt---------------------------------------");
console.log("Sqrt ile sayının karekökü bulunur. ", Math.sqrt(144));

console.log("--------------------------------------Pow---------------------------------------");
console.log("Pow ile sayının üssü bulunur. ", Math.pow(2,5));