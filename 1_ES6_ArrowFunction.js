function write() {
    console.log("Merhaba");
}

write();

function writeWithParam(firstName) {
    console.log("Merhaba", firstName);
}

writeWithParam("Mesut");

const basicArrowFunction = firstName => console.log("Merhaba", firstName);

basicArrowFunction("Mesut");

const calculate = (num1, num2) => {
    console.log("Toplam", num1 + num2);
    console.log("Fark", num1 - num2);
    console.log("Çarpım", num1 * num2);
    console.log("Bölüm", num1 / num2);
}

calculate(10, 6);

let x = 4;
const calculateCube = x => x * x * x; //tek parametrede () ve tek satırda {return } kullanılmayabilir.
console.log(x, "sayısının küp işlemi: ", calculateCube(x));