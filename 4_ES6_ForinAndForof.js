let names = ["Zeynep", "Betül", "Soner", "Oğuz"];

console.log("-------------forEach--------------------");
names.forEach((item)=>{
    let i = names.indexOf(item);
    console.log("Dizinin ", i, ".elemanı: ", item);
})


console.log("-------------For in --------------------");
for (let i in names){ //in kodu ile dizi indexi döner.
    console.log("Dizinin ", i, ".elemanı: ", names[i]);
}


console.log("-------------for of --------------------");
for (let j of names){ //of kodu ile dizi itemleri döner.
    console.log("Dizinin ", names.indexOf(j), ".elemanı: ", j);
}