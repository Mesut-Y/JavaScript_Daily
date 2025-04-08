/*
Asenkron Örnekleri:
1-Timing
2-Events
3-HTTP İstekleri

----- Asenkron Kontrolü için => CALLBACK - PROMISE - ASYNC & AWAIT 
*/

setTimeout(() => {    //asenkron komutlar kendi zamanlamasına(aniden veya süreli) göre çalışır.
    console.log("1000ms çalışır.")
}, 1000);

setTimeout(() => {
    console.log("500ms çalışır.")
}, 500);


console.log("Senkron komut 1") //senkron çalışanlar normal sırada çalışır.

console.log("Senkron komut 2")
