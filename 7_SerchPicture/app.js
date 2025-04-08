//https://unsplash.com/oauth/applications

const formWrapper = document.querySelector("#form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const ImageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();

function runEventListeners(){
    // searchButton.addEventListener("click", search);
    form.addEventListener("submit", search);
    
}

function search(e){
    
    const searchValue = searchInput.value.trim().toLocaleLowerCase();
    
    
    console.log(searchValue);
    e.preventDefault();
}

