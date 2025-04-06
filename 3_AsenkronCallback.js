function getName(){
    setTimeout(() => {
        console.log("Mesut");
    }, 500);
    
}

function getSurname(){
    setTimeout(() => {
        console.log("Y"); 
    }, 1000);
}

getSurname(); //1000ms
getName(); //500ms
