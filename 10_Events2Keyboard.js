/*
keypress    keydown      keyup
*/

document.addEventListener("keypress",run1); //Keypress event is triggered by letters and numbers.
function run1(e){
    console.log("keypres event: ", e.key, "tuşunun keycode: ", e.which); //e.keyCode = e.which
}

document.addEventListener("keydown",run2); //Keydown event is triggered by every button.
function run2(e){
    console.log("keydown event: ",e.key, "tuşunun keycode: ", e.keyCode); //e.keyCode = e.which
}


const take1 = document.querySelector("#todoName");
const send1 = document.querySelector(".card-title");
take1.addEventListener("keyup",run3);

function run3(e){
    send1.textContent = e.target.value;

}
