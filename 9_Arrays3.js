let book1 = { name: "Her Şeyi Düşünme", author: "Anne Bogel", price:162, shelf:"1.Raf-1"};
let book2 = { name: "Hiçbir Karşılaşma Tesadüf Değildir", author: "Hakan Mengüç", price:155, shelf:"2.Raf-1"};
let book3 = { name: "insan Ne ile Yaşar?", author: "L. N. Tolstoy", price:25, shelf:"2.Raf-2"};
let book4 = { name: "21. Yüzyıl için 21 Ders", author: "Yuval N. Harari", price:238, shelf:"3.Raf-1"};
let book5 = { name: "Martı Jonathan Livingston", author: "Richard Bach", price:128, shelf:"1.Raf-2"};
let book6 = { name: "insanlık 2.0", author: "Ray Kurzweil", price:426, shelf:"3.Raf-2"};
let book7 = { name: "Geleceğin Fiziği", author: "Michio Kaku", price:241, shelf:"3.Raf-3"};

let books = [book1, book2, book3, book4, book5, book6, book7];

let shelf11 = {kod: "1.Raf-1", enable: false};
let shelf12 = {kod: "1.Raf-2", enable: false};
let shelf13 = {kod: "1.Raf-3", enable: false};
let shelf14 = {kod: "1.Raf-4", enable: false};
let shelf15 = {kod: "1.Raf-5", enable: false};

let shelf21 = {kod: "2.Raf-1", enable: false};
let shelf22 = {kod: "2.Raf-2", enable: false};
let shelf23 = {kod: "2.Raf-3", enable: false};
let shelf24 = {kod: "2.Raf-4", enable: false};
let shelf25 = {kod: "2.Raf-5", enable: false};

let shelf31 = {kod: "3.Raf-1", enable: false};
let shelf32 = {kod: "3.Raf-2", enable: false};
let shelf33 = {kod: "3.Raf-3", enable: false};
let shelf34 = {kod: "3.Raf-4", enable: false};
let shelf35 = {kod: "3.Raf-5", enable: false};

let shelfs = [
    [shelf31, shelf32, shelf33, shelf34, shelf35],
    [shelf21, shelf22, shelf23, shelf24, shelf25],
    [shelf11, shelf12, shelf13, shelf14, shelf15],
];

function createShelf(){
    console.clear();
    let newLine="";
    for(let i=0; i<shelfs.length; i++){
        for(let k=0; k<5; k++){
            newLine += "|"+ (shelfs[i][k].enable ? shelfs[i][k].kod : "**********" )+ "|";
        }
        console.log(newLine);
        console.log("-----------------------------------------------------------");
        newLine="";
    }
    console.log("");
}

function findShelfByBook(book){
    //alternatif 1
    // let shelfCode="";
    // books.forEach(function (fBook){
    //     if(fBook.name.toLowerCase().includes(book.toLowerCase(),0)){
    //         shelfCode = fBook.shelf;
    //     }
    // });
    // return shelfCode;
    //alternatif 2
    // for(let i=0; i<books.length; i++){
    //     if(books[i].name.toLowerCase() == book.toLowerCase()){
    //         return books[i].shelf;  
    //     }
    // }
    //alternatif 3
    for(let i=0; i<books.length; i++){
        if(books[i].name.toLowerCase().includes(book.toLowerCase(),0)){
            return books[i].shelf;
        }
    }
}

function showShelf(fShelf){
    for(let i=0; i<shelfs.length; i++){
        for(let k=0; k<5; k++){
            if(shelfs[i][k].kod == fShelf){
                shelfs[i][k].enable=true;
                break;
            }
        }
    }
}

let bookName = prompt("Bulmak istediğiniz kitap ismini yazınız.");
let findShelf = findShelfByBook(bookName);

showShelf(findShelf);
createShelf();