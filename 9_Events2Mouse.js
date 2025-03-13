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
cardBody.addEventListener("mouseover", run5);
    
function run5() {
    
}
