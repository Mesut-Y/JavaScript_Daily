//************* Find Number of Letter in Sentence ******************//

let letter=prompt("Sayısı bulunacak harfi giriniz.");
let text="Hayatta en hakiki murşit ilimdir, fendir.";

function findNumberOfLetter(letter, text){
    let counter = 0;
    for(let i=0;i<text.length;i++){    
        if(text.charAt(i)==letter)
            counter++;
    }
    return counter;
}

console.log("Harf sayısı: ",findNumberOfLetter(letter, text));

//***************** Find the Perfect Number *********************//

let number=Number(prompt("Mükemmel olduğunu düşündüğünüz sayıyı yazınız."));

function isPerfectNumber(number){
    let sum=0;
    for(let i=1;i<=number/2;i++){
        if(number%i==0){
            sum+=i;
        }
    }
    if(sum==number)
        return true;
    else
        return false;
}
if (isPerfectNumber(number))
    console.log("Girdiğiniz sayı ",number," mükemmel sayıdır.");
else    
    console.log("Girdiğiniz sayı ",number," mükemmel sayı değildir.");


//***************** Decimal to Binary Conversion ******************//

let numberDecimal=Number(prompt("İkilik tabana çevirmek istediğiniz sayıyı yazınız."));
console.log("Girdiğiniz sayının ikilik taban karşılığı: ",
            ConvertDecimalToBinary(numberDecimal));
function ConvertDecimalToBinary(number){
    let binary="";
    while(number>1){
        binary+=number%2;
        number=Math.floor(number/2);
    }
    binary+="1";
    return reverse(binary);
}

function reverse(text){
    let reverseText="";
    for(let i=text.length-1;i>=0;i--){
        reverseText+=text.charAt(i);
    }
    return reverseText;
}

//***************** Binary to Decimal Conversion ******************//

let numberBinary=prompt("Onluk tabana çevirmek istediğiniz sayıyı yazınız.");
console.log("Girdiğiniz sayının onluk taban karşılığı: ",
            ConvertBinaryToDecimal(numberBinary));
function ConvertBinaryToDecimal(number){
    let result=0;
    let counter=0;
    for(let i=number.length-1;i>=0;i--){
        //result=result+(2**counter*Number(number.charAt(i)));
        //result=result+(Math.pow(2,counter)*Number(number.charAt(i)));
        if(Number(number.charAt(i))!=0){
            result=result+(2**counter*Number(number.charAt(i)));
        }
        counter++;
    }
    return(result);
}
