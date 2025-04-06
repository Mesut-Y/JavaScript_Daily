//callback : fonksiyonu farklı fonksiyona parametre yaparak
// asenkron çalışmayı senkrona çevirir.

function getName(callback){
    setTimeout(() => {
        let name = "Mesut" // web servisten gelmiş örneği
        callback(name, "Sayın", 56);
    }, 1000);

}

function getSurname(name, hitap, counter){
    setTimeout(() => {
        let surname = "Y"; //web servisten gelmiş örneği
        console.log(
`Hoşgeldiniz ${hitap} ${name} ${surname},
Günlük giriş yapan sayısı: ${counter} `);
    }, 500);
}

// getName(); //1000ms
// getSurname(); //500ms

getName(getSurname); //()kullanılmıyor.
