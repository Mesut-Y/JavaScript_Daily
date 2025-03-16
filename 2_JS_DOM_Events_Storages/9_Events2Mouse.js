/*
DOMContentLoaded  //document.addEventListener("DOMContentLoaded",run1);
load    //window.addEventListener("load",run2);
click 
dblclick
mouseover
mouseout
mouseenter
mouseleave
*/

document.addEventListener("DOMContentLoaded",run1);
window.addEventListener("load",run2);
function run1(){
    console.log("DOMContentLoaded ile sayfa yüklendi.")
}
function run2(){
    console.log("load ile sayfa yüklendi.")
}

const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("click",run3);
cardTitle.addEventListener("dblclick",run4);
function run3(){
    console.log("nesne mouse click ile event oluşturuldu.")
}
function run4(){
    console.log("nesne mouse double click ile event oluşturuldu.")
}

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("mouseover", run5); //cardbody childleri üzerine gelmek de tetikler.
cardBody.addEventListener("mouseout", run5); //cardbody childleri tetikler.
function run5(e) {
    console.log("Mouse event çalıştı: ", e.type);

    if(e.type == "mouseover"){
        e.target.style.fontWeight="bold";
    }
    else if(e.type == "mouseout"){
        e.target.style.fontWeight="200";
    }
}

cardBody.addEventListener("mouseenter", run6); //childler eventi tetiklemez.
cardBody.addEventListener("mouseleave", run6); //childler eventi tetiklemez.
function run6(e){
    console.log("Mouse event çalıştı: ", e.type);
    //e.target.style.fontWeight="bold";
}

