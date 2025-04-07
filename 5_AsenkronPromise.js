// PROMISE pending, resolve(fulfilled) .then, reject .catch

let check = true;

const promise1 = new Promise((resolve, reject) => {
    if (check)
        resolve("Promise1 başarılı");
    else
        reject("Promise1 başarısız");
})

console.log(promise1);

function createPromise() {
    return new Promise((resolve, reject) => {
        if (check)
            resolve("createPromise ile promise2 başarılı.");
        else
            reject("createPromise ile promise2 başarısız");
    })
}

createPromise()
    .then((response) => { console.log(response); })
    .catch((error) => { console.log(error); })
    .finally(() => { console.log("her zaman çalışır.") });


