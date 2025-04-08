// ASYNC AWAIT
// https://jsonplaceholder.typicode.com/comments?postId=1    https://jsonplaceholder.typicode.com/posts/1


function hello1() {
    return "Hello World";
}
console.log("Normal metod: ", hello1()); // return string

async function hello2() {
    return "Hello World";
}
hello2() // return promise
    .then(res => console.log("Async metod: ", res));

// document.querySelector("#button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((res) => res.json())
//         .then((post) => {
//             console.log(post);
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((res) => res.json())
//                 .then((comment) => console.log(comment))
//                 .catch((err) => console.log("comment error"));
//         })
//         .catch((err) => console.log("post error"))

// });

// //Async Await-1
// document.querySelector("#button").addEventListener("click", async () => {
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const post = await responsePost.json();
//     const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
//     const comments = await responseComments.json();
//     console.log(post, comments);
// });

//Async Await-2
document.querySelector("#button").addEventListener("click", async () => {
    const post = await (await (fetch("https://jsonplaceholder.typicode.com/posts/1"))).json();
    const comments = await (await (fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`))).json();
    console.log(post, comments);
})