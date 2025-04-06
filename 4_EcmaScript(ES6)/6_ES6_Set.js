const set1 = new Set(); //sset can be used collect all type but values must be unique 
set1.add(2);
set1.add(3.14);
set1.add("yes");
set1.add(true);
set1.add([1, 2, 3]);
set1.add({ username: "M", password: "1" });
set1.add({ username: "M", password: "1" }); //! Be careful with reference type values
console.log(set1);

const futbolTeams = new Set();

futbolTeams.add("Hatayspor");
futbolTeams.add("Altayspor");
futbolTeams.add("Altayspor");// it is not added to set. because same values reused.
futbolTeams.add("Altayspor");
futbolTeams.add("Altayspor");
futbolTeams.add("Altayspor");
futbolTeams.add("Altayspor");
futbolTeams.add("Göztepe");
futbolTeams.add("Kocaeli");
futbolTeams.add("Bursaspor");
futbolTeams.add("Adana Demirspor");
futbolTeams.add("Sivasspor");

console.log(futbolTeams);
console.log("Set listesinin elaman sayısı: ", futbolTeams.size);
console.log("Göztepe değerinin sette olup olmama sorgusu: ", futbolTeams.has("Göztepe"));

console.log("------- set for of usage ---------");
for (let value of futbolTeams) {   //index olmadığı için for in kullanılmaz.
    console.log(value);
}
console.log("Göztepe değeri set listesinden silindi: ", futbolTeams.delete("Göztepe"));

console.log("------- set foreach usage ---------");
futbolTeams.forEach((value) => {
    console.log(value);
})

console.log("------------- set to array conversion-------------");
const array = Array.from(futbolTeams);
for (let i in array) {
    console.log("Setin ", i, ".elemanı: ", array[i]);
}

console.log("------------- array to set conversion-------------");
const array2 = ["Real Madrid", "Barselona", "Atletico Madrid"];
const futbolTeams2 = new Set(array2);
futbolTeams2.forEach((value) => {
    console.log(value);
})

