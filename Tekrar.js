

// let state = true;

// const promise1 = new Promise((resolve, reject) => {
//     if(state)
//         resolve("promise1 başarılı");
//     else
//         reject("promise1 başarısız");
// });

// console.log(promise1);


// function createPromise(){
//     return new Promise((resolve, reject) => {
//         if (state)
//             resolve("başarılı");
//         else
//             reject("başarısız");
//     })
// }

// createPromise()
// .catch(error => console.log(error))
// .then(resolve => console.log(resolve))
// .finally(() => console.log("finally"));

function getStudents(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
        try {
            if (xhr.status === 200 && xhr.readyState === 4) {
                resolve(JSON.parse(xhr.responseText));
            }
        } catch (error) {
            reject(error);
        }
    })
        xhr.open("GET", url);
        xhr.send();
    })

}

getStudents("students.json")
    .then(data => console.log(data))
    .catch(err => console.log(err));