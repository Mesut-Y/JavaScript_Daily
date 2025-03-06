var number1 = 10; // var aynı isme izin verir. birinci dğeişkeni günceller.
var number1 = 5;
console.log("Number1 değişken değeri: ", number1);

let number2 = 10; 
// let number2 = 15; // let aynı isme izin vermez


// var function scope , let-const block scope
function function_scope(){
    if(true){
        var varVariable = "created VAR variable in block";
        let letVariable = "created LET variable in block";
        const constVariable = "created CONST variable in block"
    }
    console.log("VAR variable can be used outside of block ", varVariable); 
//    console.log("LET variable can NOT be used outside of block ", letVariable);
//    console.log("CONST variable can NOT be used outside of block ", constVariable);
}

function_scope();

// var-let are mutable, const(constant) is immutable
var varMutable = -10;
let letMutable = -20;
const constImmutable = 10;

varMutable = 5;
letMutable = 5;
//constImmutable = 15;

console.log("var değişir: " + varMutable );
console.log("let değişir: " + letMutable );
console.log("const değişmez: " + constImmutable);


const user = {
    username : "MesutY",
    password : "951"
}
// user = { age : 33} const obje değiştirilemez.

user.password = "753"; // obje özellikleri değiştirilebilir.

console.log(user);


