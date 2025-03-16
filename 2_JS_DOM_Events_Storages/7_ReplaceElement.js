let todoList = document.querySelector(".list-group");

todoList.replaceChild(todoList.childNodes[1], todoList.children[3]);

console.log(todoList);