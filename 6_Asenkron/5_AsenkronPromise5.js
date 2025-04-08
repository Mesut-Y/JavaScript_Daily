// Promise All


const p1 = Promise.resolve("Promise 1 başarılı.");
const p2 = Promise.resolve("Promise 2 başarılı.");
const p3 = new Promise((resolve, reject) => {
    resolve("Promise 3 başarılı.")
})

const p4 = Promise.reject("Promise 4 başarısız.");
const p5 = new Promise((resolve, reject) => {
    reject("Promise 5 başarısız.")
})
const p6 = Promise.reject("Promise 6 başarısız.");

Promise.all([p1, p2, p3]) //promiseler array olarak işlenir.
    .then((data) => {   //p1, p2, p3 resolve içerikleri dizi olarak döner
        for (let content of data) {
            console.log(content);
        }
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

Promise.all([p1, p2, p3, p4, p5, p6])
    .then((data) => {
    })
    .catch((err) => {  // p4 reject içeriği döner
        console.log(err);
    })