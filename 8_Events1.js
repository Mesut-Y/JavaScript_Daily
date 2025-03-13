// HTML kodu içinden <a href="#"   onclick="changeTitle()" event eklenebilir.
//addEventListener()

let clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", function(){
    console.log("1- Js dosyası üzerinden event oluşturuldu.");
});

clearButton.addEventListener("click",changeTitle); //!changeTitle sonra () yok
clearButton.addEventListener("click",eParam);

function changeTitle(){
    document.querySelectorAll(".card-title")[1].textContent ="Todo başlığı değişti.";
    console.log("2-JS dosyası üzerinden event oluşturuldu.")
}

function eParam(e){
    console.log("Event ile parametre olarak event özellikleri yazılabilir.", e.target);
}