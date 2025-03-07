/*
charAt()
indexOf()
lastIndexOf()

concat()

toUpperCase()
toLowerCase()

trim()
slice()
substring()

replace()
split()
valueOf()
startsWith()
endsWith()
*/

let sentence = "Geriye düştüğünüzde değil pes ettiğinizde yenilirsiniz.";

console.log("Cümlenin orjinali: ", sentence);

console.log("charAt ile string içindeki index yazdırma: ",sentence.charAt(0)); //G
console.log("indexOf ile string içinde baştan arama: ", sentence.indexOf("de")); //17
console.log("lastIndexOf ile string içinde sondan arama: ", sentence.lastIndexOf("de")); //39

let sentence2="Terini sil ve devam et.";
let sentenceConcat = sentence.concat(sentence2); //return compound sentences, change original string
console.log("Birleştirilmiş cümle: ", sentenceConcat);

let sentenceLowerCase = sentence.toLowerCase(); //dont change original string
console.log("toLowerCase ile harf küçültme: ", sentenceLowerCase);
console.log("toUpperCase ile harf büyütme: ", sentence.toUpperCase()); //dont change original string

let sentenceTrim= "             Merhaba Dünya         ";
console.log("trim ile boşlujları temizleme: ", sentenceTrim.trim()); //dont change original string





