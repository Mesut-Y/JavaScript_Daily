// PROMISE pending, resolve(fullfilled) .then, reject .catch

let check = true;

const promise1 = new Promise((resolve, reject) => {
    if(check)
        resolve("Promise başarılı");
    else
        reject("Promise başarısız");
})

console.log(promise1);