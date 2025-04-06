//callback : fonksiyonu farklı fonksiyona parametre yaparak
// asenkron çalışmayı senkrona çevirir.

function getName(callback){
    setTimeout(() => {
        console.log("Mesut");
        callback();
    }, 1000);

}

function getSurname(){
    setTimeout(() => {
        console.log("Y");
    }, 500);
}

// getName(); //1000ms
// getSurname(); //500ms

getName(getSurname);
