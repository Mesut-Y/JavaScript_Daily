const todoBody1 = document.querySelectorAll(".card-body")[0]; // popup uyarı vermek için
const todoBody2 = document.querySelectorAll(".card-body")[1];  //- todo eklemek için
const todoInput = document.querySelector("#todoName");

const todoAddButton = document.querySelector("#todoAddButton");
const todoForm = document.querySelector("#todoAddForm");
const todoListGroup = document.querySelector(".list-group");
const todosClearButton = document.querySelector("#todoClearButton");
const todoFilter = document.querySelector("#todoSearch");

let todos;

start();

function start(){
    todoAddButton.addEventListener("click",addTodo);  //- todoForm.addEventListener("submit", addTodo); 
    document.addEventListener("DOMContentLoaded",loadPage);
    todoBody2.addEventListener("click",removeTodo);
    todosClearButton.addEventListener("click",removeAllTodos);
    todoFilter.addEventListener("keyup",allTodoFilter);
}

function addTodo(e) {
    const inputText = todoInput.value.trim();
    if (inputText==null || inputText==""){
        showAlert("warning", "Lütfen geçerli bir todo yazınız.");
    }
    else{
        addTodoUIElement(inputText); //like UI
        addTodoMemory(inputText);  //like DB
        showAlert("success", "Todo Eklendi.");
    }
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
    },1000);

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
    removeTodoMemory(e);
}

function removeTodoUIElement(e){
    if( e.target.className === "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
    }
}

function removeTodoMemory(e){
    checkStorage();
    if(todos.length>0 && e.target.className==="fa fa-remove"){
    todos.forEach(function (item,index){
        if(item===e.target.parentElement.parentElement.textContent) //li textcontent
        {
            todos.splice(index,1);
            
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
    showAlert("success","todo başarıyla silindi.");
    }
}

function removeAllTodos(){
    localStorage.removeItem("todos");
    if(todoListGroup.children.length>0){
        Array.from(todoListGroup.children).forEach(function (item){
            if(item.className=="list-group-item d-flex justify-content-between")
            {
                item.remove();
            }
        })
        showAlert("success","Tüm todo listesi silindi.");
    }
    else{
        showAlert("warning","Lütfen todo listesini kontrol ediniz.");
    }
}

function allTodoFilter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const listOfTodos = Array.from(todoListGroup.children);
    if(listOfTodos.length>0){
        listOfTodos.forEach(function(item){
            if(item.textContent.toLowerCase().trim().includes(filterValue)){
                item.setAttribute("style", "display : block");
            }
            else{
                item.setAttribute("style", "display : none !important");  //css eziyor.
            }
        })
    }
    else{
        showAlert("warning","Todo listesi boş durumdadır. Filtrelemeye uygun değildir.")
    }
}

//console.log(localStorage.getItem(todos));