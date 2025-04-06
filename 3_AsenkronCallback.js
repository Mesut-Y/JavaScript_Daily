//callback : fonksiyonu farklı fonksiyona parametre yaparak
// asenkron çalışmayı senkrona çevirir.

function getName(callback){
    setTimeout(() => {
        let name = "Mesut" // web servisten gelmiş örneği
        callback(name);
    }, 1000);

}

function getSurname(name){
    setTimeout(() => {
        let surname = "Y"; //web servisten gelmiş örneği
        console.log(`Hoşgeldiniz ${name} ${surname}`);
    }, 500);
}

// getName(); //1000ms
// getSurname(); //500ms

getName(getSurname);
