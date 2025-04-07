//  ---FETCH API---

// callback -> promise
// Ajax(xmlhttprequest) -> fetch api

function getStudents(url) {
    fetch(url)
        .then(response => response.json()) // === response => return response.json()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getStudents("students.json");