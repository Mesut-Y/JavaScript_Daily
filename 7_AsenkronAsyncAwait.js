// ASYNC AWAIT
// https://jsonplaceholder.typicode.com/comments?postId=1    https://jsonplaceholder.typicode.com/posts/1


function hello1(){
    return "Hello World";
}
console.log("Normal metod: ",hello1()); // return string

async function hello2(){
    return "Hello World";
}
hello2() // return promise
.then(res => console.log("Async metod: ",res));