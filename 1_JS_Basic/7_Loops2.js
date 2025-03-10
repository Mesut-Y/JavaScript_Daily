//**********************  Faktöryel ************************//
console.log("While ile faktöryel hesaplanması: ")
let sum1 = 1;
let number1 = Number(prompt("Faktöryel istenilen sayıyı yazınız."));
while(number1>0){
    sum1 = sum1 * number1;
    number1--;
}
console.log(sum1);
//**********************  Asal Sayı *************************//
console.log("DoWhile ile asal sayı belirleme: ")

let number2=Number(prompt("Asal sayı olduğunu düşündüğünüz sayıyı yazınız."))
number1 = Math.floor(number2/2);
let divider = 2;
let status = true;
do {
    if(number2%divider==0){
        status=false;
        break;
    }
    divider++;
} while (divider<=number1);
if(status == true)
    console.log("Asal sayıdır");
else
    console.log("Asal değildir.");

//**********************  Çarpım Tablosu *************************//
console.log("For ile çarpımtablosu yazdırma: ")
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(i,"x",j,"= ",i*j);
    }
    console.log("------------------------------------------")
}

//**********************  Armstrong Sayı *************************//
console.log("For ile armstrong sayısı belirleme: ")

let armNumber=prompt("Armstrong olduğunu düşüğündüğünüz sayıyı yazınız.");
let sum2=0;
for(let k=0;k<armNumber.length;k++)
{
    let numberTemp=Number(armNumber.charAt(k));
    sum2=sum2+(numberTemp**3);
}
if(sum2 == armNumber)
    console.log("Girdiğiniz sayı armstrong sayısıdır.");
else
    console.log("Girdiğiniz sayı armstrong sayısı değildir.");
