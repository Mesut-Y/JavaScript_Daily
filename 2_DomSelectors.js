// You can use id , classname , tagname for select elements that called first way. 
// Also you can use querySelector , querySelectorAll that called second way which is most used way

// ? First Way:  getElementsById   getElementByClassName     getElementByTagName

console.log("------getElementById------");
let getElemById = document.getElementById("todoAddButton");
// getElemById = getElemById.getAttribute("class");
// getElemById = getElemById.getAttribute("type");
// getElemById = getElemById.classList[3];

// getElemById.textContent = "<b> Todo Ekleyin </b>"; // do like string
// getElemById.innerHTML = "<b> Todo Ekleyin </b>"; // do like html tag

console.log("------getElementsByClassName------");
let getElemByClassName = Array.from(document.getElementsByClassName("list-group-item"));

getElemByClassName.forEach(function(item){
    console.log(item);   //item.textContent
})


console.log("------getElementsByTagName------");
let getElemByTagName = Array.from(document.getElementsByTagName("li"));

getElemByTagName.forEach(function(item){
    console.log(item);
})
//console.log(getElemByTagName);
//console.log(getElemById);
//console.log(getElemByClassName);








