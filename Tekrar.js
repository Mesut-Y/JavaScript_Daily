

let state = true;

const promise1 = new Promise((resolve, reject) => {
    if(state)
        resolve("promise1 başarılı");
    else
        reject("promise1 başarısız");
});

console.log(promise1);


function createPromise(){
    return new Promise((resolve, reject) => {
        if (state)
            resolve("başarılı");
        else
            reject("başarısız");
    })
}

createPromise()
.catch(error => console.log(error))
.then(resolve => console.log(resolve))
.finally(() => console.log("finally"));