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
    document.addEventListener("DOMContentLoaded",loadPage);
    todoBody2.addEventListener("click",removeTodo);
}

function addTodo(e) {
    const inputText = todoInput.value.trim();
    if (inputText==null || inputText==""){
        showAlert("warning", "Lütfen geçerli bir todo yazınız.");
    }
    else{
        console.log("submit");
        addTodoUIElement(inputText); //like UI
        addTodoMemory(inputText);  //like DB
        showAlert("success", "Todo Eklendi.");
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

function showAlert(alertType, alertMessage){
    const div = document.createElement("div");
    div.className = "alert alert-"+alertType; //div.className = `alert alert-${alertType}`; //literal template
    div.role = "alert";
    div.textContent = alertMessage;
    todoBody1.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2000);

//  <div class="alert alert-warning" role="alert">
//   This is a warning alert—check it out!
//  </div>
}

function loadPage(){
    checkStorage();
    todos.forEach(function (item){
        addTodoUIElement(item);
    })
}

function removeTodo(e){
    removeTodoUIElement(e);
    //removeTodoMemory();
}

function removeTodoUIElement(e){
    console.log(e.target);
    if( e.target.className === "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
    }
}


//console.log(todoListGroup);