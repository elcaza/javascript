"use strict";

// Search with google

let searchByGoogle = document.querySelector("#searchByGoogle");
let searchByLucky = document.querySelector("#luckyByGoogle");
let input = document.querySelector("#contain__searchContent");
let text;

searchByGoogle.addEventListener("click", () => {
    text = document.getElementById('contain__searchContent').value;
    window.location.href = "https://www.google.com/search?source=s&ei=s&q="+text;
});

searchByLucky.addEventListener("click", () => {
    text = document.getElementById('contain__searchContent').value;
    window.location.href = "https://www.google.com/search?source=s&ei=s&q="+text;
});

input.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        text = document.getElementById('contain__searchContent').value;
        window.location.href = "https://www.google.com/search?source=s&ei=s&q="+text;
    }
});
