let button = document.querySelector("#likeBtn");
let likeText = document.querySelector("#likes");

let like = 0;

button.addEventListener("click", function() {
    like++;
    likeText.textContent = `Likes: ${like}`;
});