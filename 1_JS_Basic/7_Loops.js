//TODO: For  While  Do-While  Foreach

//************************   FOR    ******************************//
console.log("For Loop Usage");
for(let i=1;i<11;i++) //i++ yerine i+=3 ile 3'er ritmik artış yapılabilir.
{
    console.log(i);
}

let sum = 0;
for(let j=0;j<15;j++)
{
    sum = sum + j;
    if(j%2 == 0)
        console.log(j, " even");
    else
        console.log(j, " odd");
}
console.log("0'dan 15'e kadar sayılar toplamı: ", sum);

//************************   WHILE    ******************************//
console.log("While Loop Usage");
let counter = 0;
while(counter<15){
    counter++;
    if (counter==13) {
        break;  }    // döngü bloğundan çıkılır.
    if (counter==7) {
        continue;  } // döngü 1 sefer atlanır.
    if(counter%2 == 0)
        console.log(counter, " even");
    else
        console.log(counter, " odd");

}

//************************   DO-WHILE    ******************************//
console.log("Do While Loop Usage");
counter = 0 ;
do {
    if(counter%2 == 0)
        console.log(counter, " even");
    else
        console.log(counter, " odd");
    counter++;
} while (counter<15);

//************************   FOREACH    ******************************//
console.log("ForEach Loop Usage");
sum = 0;
const numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(toSumUp);

function toSumUp(item){
    sum = sum + item;
}
console.log("Foreach döngüsü ile sayıların toplamı: ",sum);

