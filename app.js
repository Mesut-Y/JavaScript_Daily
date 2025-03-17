const todoBody1 = document.querySelectorAll(".card-body")[0]; // popup uyarı vermek için
const todoBody2 = document.querySelectorAll(".card-body")[1];  //- todo eklemek için
const todoInput = document.querySelector("#todoName");

const todoAddButton = document.querySelector("#todoAddButton");
const todoForm = document.querySelector("#todoAddForm");
const todoListGroup = document.querySelector(".list-group");
const todosClearButton = document.querySelector("#todoClearButton");

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
        //- todo UI  göster
        console.log("submit");
        addTodoUIElement(inputText);

        //- localstorage ekle
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

//     <!-- <li class="list-group-item d-flex justify-content-between">Todo 1
//     <a href="#" class="delete-item">
//         <i class="fa fa-remove"></i>
//     </a>
// </li> -->
}




//console.log(todoListGroup);