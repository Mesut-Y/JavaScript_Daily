//<a href="#" id="todoClearButton"  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

const link = document.createElement("a");
link.id="todoCompleteButton";
link.className = "btn btn-primary btn-sm mt-3";
link.innerHTML = "Tüm Görevler Tamamlandı.";
link.href = "https://www.youtube.com/watch?v=iSBBsUld8zM";
link.target = "_blank";
link.style.color = "white";

button2 = document.querySelectorAll(".card-body")[1];
button2.appendChild(link);

console.log(button2);


/* <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
                </a>
    </li> */


const listGroup = document.querySelector(".list-group");
const li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between";
li.innerHTML = "Todo 5";
const aElement = document.createElement("a");
aElement.href="#";
aElement.className = "delete-item";
iElement = document.createElement("i");
iElement.className = "fa fa-remove";

aElement.appendChild(iElement);
li.appendChild(aElement);
listGroup.appendChild(li);

console.log(listGroup);

