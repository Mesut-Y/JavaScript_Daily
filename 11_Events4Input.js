/*
focus
blur
copy
paste
cut
select
*/

const todoName = document.querySelector("#todoName");

todoName.addEventListener("focus",run1);
function run1(e){
    console.log("Todo Giriniz nesnesine tıklandı.");
}

todoName.addEventListener("blur",run2);
function run2(e) {
    console.log("Todo girinis nesnesinden çıkıldı.");
}

todoName.addEventListener("copy",run3);
function run3(e){
    console.log("Metin kopyalandı. ", e.target.value);
}

todoName.addEventListener("paste",run4);
function run4(e){
    console.log("Metin yapıştırıldı. ", e.target.value);
}

todoName.addEventListener("cut",run5);
function run5(e){
    console.log("Metin kesildi. ", e.target.value);
}

todoName.addEventListener("select",run6);
function run6(e){
    console.log("Metin seçildi. ", e.target.value);
}
