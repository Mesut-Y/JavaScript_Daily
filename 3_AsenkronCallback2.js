//callback : fonksiyonu farklı fonksiyona parametre yaparak
// asenkron çalışmayı senkrona çevirir.

function getName(callback){
    setTimeout(() => {
        let name = "Mesut" // web servisten gelmiş örneği
        callback(name, "Sayın", 56);
    }, 1000);

}

function getSurname(name, address, counter, callback){
    setTimeout(() => {
        let surname = "Y"; //web servisten gelmiş örneği
        callback(surname);
    }, 500);
}

// getName(); //1000ms
// getSurname(); //500ms

//getName(getSurname)
// getName((name, address, counter) => {
//     console.log(name, address, counter);
// }); //arrowfunction

//getName(getSurname)
getName((name, address, counter) => {
    getSurname(name,address,counter, (surname) =>{
        console.log(
`Hoşgeldiniz ${address} ${name} ${surname},
Günlük giriş yapan sayısı: ${counter} `);
    })
}); //arrowfunction

//ardışık metodlar kodlanırken CALLBACK HELL sorunu yaşanır.
//bundan dolayı  PROMISE - ASYNC & AWAIT