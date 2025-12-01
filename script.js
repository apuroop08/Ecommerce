const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");

if(bar) {
    bar.addEventListener("click", function() {
        nav.classList.add("active");
    })
}

if(close) {
    close.addEventListener("click", function() {
        nav.classList.remove("active");
    })
}

const mainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function() {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    mainImg.src = smallImg[3].src;
}
