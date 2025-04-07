// Promise  XMLHttpRequest(https://jsonplaceholder.typicode.com/users/id), (https://jsonplaceholder.typicode.com/comments)

function createUrl(url, id) {
    if (id != null)
        return `${url}/${id}`;
    else
        return url;
}

function getUser(url, id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        });
        let newUrl = createUrl(url, id);
        xhr.open("GET", newUrl);
        xhr.send();

    });
}

function getCommentsById(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
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

getUser("https://jsonplaceholder.typicode.com/users", 2)
    .catch(err => { console.log(err); })
    .then(data => {
        console.log(data);
        // getCommentsById(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
        // .then(data => console.log(data));
        return getCommentsById(`https://jsonplaceholder.typicode.com/comments/${data.id}`)

    })
    .then(data => console.log(data))
    .finally(() => console.log("finally"));