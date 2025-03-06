//************** Void Function Without Parameters ******************//

function nameWrite(){
    console.log("Mesut Y");
}

//************** Void Function With Parameters ********************//

function sum(num1,num2){
    console.log(num1+num2);
}
sum(3,5);
sum(10,20);

//************ Return Type Function With Parameters ***************//

console.log("Sayının kübü: " ,calculateCube(4)); //call function where you want in code.

function calculateCube(num1){
    return num1**3;
}
function calculateSquare(num1){
    return num1**2;
}

function calculateFourthPower(num1){
    return calculateSquare(num1)**2;
}

console.log("Sayının karesi: " ,calculateSquare(5));
console.log("Sayının dördüncü kuvveti: ", calculateFourthPower(3));

