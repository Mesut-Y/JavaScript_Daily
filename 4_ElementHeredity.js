//! children , nectElementSibling , previousElementSibling , parentElement

let todoTitle = document.querySelector(".card");
let todo3 = document.querySelector(".list-group");
let container = document.querySelectorAll(".card-title");


todoTitle = todoTitle.children[3].children[0];

todoTitle.style.fontWeight = "900";
todoTitle.style.fontSize = "40px";

container = container[0].parentElement.parentElement;

todo3 = todo3.children[0].nextElementSibling.nextElementSibling; //previousElementSibling -> önceki
todo3.innerHTML = "<b> Todo değişti.</b>"
todo3.style.color = "red";


console.log(todoTitle);
console.log(container);
console.log(todo3);