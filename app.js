const todoBody1 = document.querySelectorAll(".card-body")[0]; // popup uyarı vermek için
const todoBody2 = document.querySelectorAll(".card-body")[1];  //- todo eklemek için
const todoInput = document.querySelector("#todoName");

const todoAddButton = document.querySelector("#todoAddButton");
const todoForm = document.querySelector("#todoAddForm");
const todoListGroup = document.querySelector(".list-group");
const todosClearButton = document.querySelector("#todoClearButton");
let todos;

start();

function start(){
    todoAddButton.addEventListener("click",addTodo);  //- todoForm.addEventListener("submit", addTodo); 
}

function addTodo(e) {
    const inputText = todoInput.value.trim();
    if (inputText==null || inputText==""){
        alert("Lütfen boş bırakmayınız.");
    }
    else{
        console.log("submit");
        addTodoUIElement(inputText); //like UI
        addTodoMemory(inputText);  //like DB
    }
    console.log("preventDefault");
    e.preventDefault();
}

function addTodoUIElement(newTodo){
const li = document.createElement("li");
li.className="list-group-item d-flex justify-content-between";
li.textContent=newTodo;
const a = document.createElement("a");
a.href="#";
a.className="delete-item";
const i = document.createElement("i");
i.className="fa fa-remove";

a.appendChild(i);
li.appendChild(a);
todoListGroup.appendChild(li);


}

function addTodoMemory(newTodo){
    checkStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(todos);
}

function checkStorage(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}


//console.log(todoListGroup);