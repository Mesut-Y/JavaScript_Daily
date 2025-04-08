//https://unsplash.com/oauth/applications

const formWrapper = document.querySelector("#form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const ImageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();

function runEventListeners() {
    // searchButton.addEventListener("click", search);
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clearImages);
}

function clearImages(){
    searchInput.value="";
    Array.from(ImageListWrapper.children).forEach(data =>{ data.remove(); });
}

function search(e) {

    const searchValue = searchInput.value.trim().toLocaleLowerCase();

    fetch(`https://api.unsplash.com/search/photos?query=${searchValue}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID 03Qi23YZyMbo4UhPaUaEimKi1YbIyfwgTqpDZ1Rll7s"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            Array.from(data.results).forEach((image) => {
                //console.log(image.urls.small);
                addImagetoUI(image.urls.small);
            })
        })
        .catch(err => console.log(err));

    console.log(searchValue);
    e.preventDefault();
}

function addImagetoUI(url) {
    /*
    <div class="card">
        <img src="" alt="">
    </div>
    */
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "400";

    div.appendChild(img);
    ImageListWrapper.appendChild(div);
}

