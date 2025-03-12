//select element then remove 
//select parent element then removeChild

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");

todos[0].remove();
//- todos[1].remove();
todos[todos.length-3].remove();


todoList.removeChild(todos[2]); //removeChild(Node)
//- todoList.removeChild(todoList.children[3]);
todoList.removeChild(todoList.lastElementChild); //- todos[todos.length-1].remove();


console.log(todoList.children);