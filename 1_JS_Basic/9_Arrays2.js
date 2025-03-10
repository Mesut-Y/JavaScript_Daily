let watch1 = {
    brand : "Fossil",
    model : "FFS6042",
    price : 9009.00
}
let watch2 = {
    brand : "Emporio Armani",
    model : "AR11360",
    price : 21195.00
}
let watch3 = {
    brand : "Cerruti 1881",
    model : "CIWGR0012301",
    price : 17068.00
}
let watch4 = {
    brand : "Tommy Hilfiger",
    model : "TH1710541",
    price : 8799.00
}
let watch5 = {
    brand : "Fossil",
    model : "FFS5251SET",
    price : 13041.00
}
let watch6 = {
    brand : "Emporio Armani",
    model : "AR11215",
    price : 22167.00
}

let watches = [watch1, watch2, watch3, watch4, watch5, watch6];
let userChoice = prompt("Hangi saati arıyorsunuz?");
let filteredWatches = new Array;
findWatch(userChoice);
writeWatches(filteredWatches);

function findWatch(find){
    watches.forEach(function(item){
        if(item.brand.toLowerCase().includes(find.toLowerCase()))
            filteredWatches.push(item);
    });
}

function writeWatches(writed){
    console.log("Marka","\t\t|\t","Model","\t|\t","Fiyat");
    writed.forEach(function(item){
        console.log("---------------------------------------------");
        console.log(item.brand,"\t\t|\t ",item.model,"\t|\t",item.price);
        console.log("---------------------------------------------");
    });
}