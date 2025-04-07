// Promise  XMLHttpRequest

function getStudents(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject("başarısız");
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

getStudents("students.json")
    .catch((err) => { console.log(err) })
    .then((data) => { console.log(data) });