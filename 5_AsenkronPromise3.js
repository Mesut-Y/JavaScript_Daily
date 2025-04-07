// Promise  XMLHttpRequest(https://jsonplaceholder.typicode.com/users)

function getUsers(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",() => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } 
            } catch (error) {
                reject(error);
            }         
        })
        xhr.open("GET",url);
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
.then(data => { 
    console.log(data);
    data.forEach(element => {
        console.log(element.name);
    });})
.catch(err => {console.log(err)})
.finally(() => { console.log("finally");})
