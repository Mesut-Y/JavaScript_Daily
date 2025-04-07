// Promise  XMLHttpRequest(https://jsonplaceholder.typicode.com/users/id), (https://jsonplaceholder.typicode.com/comments)

function createUrl(url, id) {
    if (id != null)
        return `${url}/${id}`;
    else
        return url;
}

function getUser(){
    
}