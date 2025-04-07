//  ---FETCH API---  (local) (https://jsonplaceholder.typicode.com/posts)

// callback -> promise
// Ajax(xmlhttprequest) -> fetch api

function getStudents(url) {
    fetch(url)
        .then(response => response.json()) // === response => return response.json()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getStudents("students.json");

function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for(let content of data){
                if(content.userId === 9){
                    console.log(content.id);
                    console.log(content.title)
                }
            }
        })
        .catch(err => console.log("1.yöntem hatası"));
}

getData("https://jsonplaceholder.typicode.com/posts");

function getData2(url){
    return fetch(url);
}

getData2("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log("2.yöntem hatası"));