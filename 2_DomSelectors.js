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

// ? Second Way: querySelector  ,   querySelectorAll


const clearButton = document.querySelector("#todoClearButton");  //use # for id like css
console.log(clearButton);
//console.log(document.getElementById("todoClearButton"));


const itemList = document.querySelector(".list-group-item"); //use . for id like css
console.log(itemList); //! It is used querySelectorAll for all elements in class

const itemListTrue = document.querySelectorAll(".list-group-item");
console.log(itemListTrue);
console.log("gruptaki 3. eleman: ",document.querySelectorAll(".list-group-item")[2]);
console.log("gruptaki son eleman: ",document.querySelectorAll(".list-group-item")
                [document.querySelectorAll(".list-group-item").length-1]);

let childItem = document.querySelectorAll("li:nth-child(3)"); //get 3rd child
console.log(childItem);

childItem = Array.from(document.querySelectorAll("li:nth-child(even)")); //çift sayılar.  odd-tek sayılar
console.log(childItem);

childItem.forEach(function (item){
    item.style.backgroundColor="lightgrey";
})






