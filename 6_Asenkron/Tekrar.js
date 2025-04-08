

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

// function getStudents(url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.status === 200 && xhr.readyState === 4) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (error) {
//                 reject(error);
//             }
//         })
//         xhr.open("GET", url);
//         xhr.send();
//     })

// }

// getStudents("students.json")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// // https://jsonplaceholder.typicode.com/comments?postId=1    https://jsonplaceholder.typicode.com/posts/1

// document.querySelector("#button").addEventListener("click", async () => {
//     const post =  await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const comment = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
//     console.log(post, comment);
// });

// https://jsonplaceholder.typicode.com/users   https://jsonplaceholder.typicode.com/todos

const button = document.querySelector("#button");
const textBox = document.querySelector("#text1");

button.addEventListener("click", async () => {
    const result = await getUserIdByName();
    for (let content of result) {
        getTodosByUserId(content);
    }
});
textBox.addEventListener("keyup", async () => {
    const result = await getUserIdByName();
    for (let content of result) {
        getTodosByUserId(content);
    }
});


async function getUserIdByName() { //promise döner
    let array = [];
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    //console.log(users);
    users.forEach(element => {
        if ((element.name.toLowerCase()).includes(textBox.value.toLowerCase())) {
            array.push(element.id);
        }
    });
    return (array);
}

async function getTodosByUserId(id) {
    let todos = await (await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)).json();
    console.clear();
    console.log(todos);
}

