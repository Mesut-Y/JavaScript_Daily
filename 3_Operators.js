//-------------------------Aritmetiksel Operatörler-----------------------//
let number1 = 10;
let number2 = 20;
console.log("Sayılarım toplamı", number1+number2); //30

console.log("Sayılarım toplamı"+ number1+number2); //!1020
console.log("Sayılarım toplamı"+ (number1+number2)); //30

// - * / % ++ --  **

console.log("5 sayısının 3 üssü: ", 5**3);

//--------------------------Atama Operatörleri-----------------------------//

/*  =   ==  ===   
    +=    -=    *=    /=     %=       
    **=   
*/

console.log(5=="5"); // true  
console.log(5==5);   //true
console.log(5===5);  //true  - both value and type comparison
console.log(5==="5"); //false - both value and type comparison

let number3 = 5;
number3+=7;     // number3 = number3(5) + 7    => 12
number3-=2;     // number3 = number3(12) - 2   => 10
number3*=10;    // number3 = number3(10) * 10  => 100
number3/=5;     // number3 = number3(100) / 5  => 20
number3%=3;      // number3 = number3(20) % 3  => 2
number3**=3;      // number3 = number3(2) ** 3 => 8

console.log("İşlemlerin sonucu: ", number3);