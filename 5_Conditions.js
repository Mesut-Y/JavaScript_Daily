//**********************  IF - ELSEIF - ELSE   **********************//
let grade = 70;

if (grade> 50){
console.log("Geçtiniz.");
}
else{
console.log("Kaldınız");
}

let age = Number(prompt("Enter your age: "));
let desicion = confirm("Have you passed your driving test?")

if (age<=18){
    console.log("You have to wait until you are 18.")
}
else if (age>18 && desicion){
    console.log("You can get a driver's licence.")
}
else{
    console.log("You can not get a driver's licence.")
}


//*********************   SWITCH - CASE   *************************//
let newLine = "\r\n";
const text="1-Bakiye Öğren"+newLine+
    "2-Para Yatır"+newLine+
    "3-Para Çek"+newLine+
    "4-Çıkış"+newLine+
    "Lütfen bir işlem seçiniz.";
let balance = 1000;
let choice = prompt(text);

switch(choice){
    case "1":
        console.log("Bakiyeniz: ", balance);
    break;
    case "2":
        let moneyDeposite = Number(prompt("Hesaba yatırılacak para miktarını yazınız."));
        balance = balance + moneyDeposite;
        console.log("Bakiyeniz: ", balance);
    break;
    case "3":
        let moneyWithdraw = Number(prompt("Hesabınızdan çekilecek para miktarını yazınız."));
        if (moneyWithdraw>balance){
            console.log("Bakiyeniz yetersizdir.");
        }
        else{
            balance = balance - moneyWithdraw;
            console.log("Bakiyeniz: ", balance);
        }
    break;
    case "4":
        console.log("çıkış yaptınız.");
    break;
    default:
        console.log("Lütfen 1 ile 4 arasında bir tercih yapınız.");
    break;  
}
