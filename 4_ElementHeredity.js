//! children , nectElementSibling , previousElementSibling , parentElement

let todoTitle = document.querySelector(".card");
let todo3 = document.querySelector(".list-group");
let container = document.querySelectorAll(".card-title");


todoTitle = todoTitle.children[3].children[0];

todoTitle.style.fontWeight = "900";
todoTitle.style.fontSize = "40px";

todo3 = todo3.children[0].nextElementSibling.nextElementSibling; //previousElementSibling -> önceki

container = container[0].parentElement.parentElement;

console.log(todoTitle);
console.log(todo3);
console.log(container);