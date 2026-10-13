let button = document.querySelector("#likeBtn");
let button2 = document.querySelector("#dislikeBtn");
let likeText = document.querySelector("#likes");

let like = 0;
let Dislike = 0;

button.addEventListener("click", function() {
    like++;
    likeText.textContent = `Likes: ${like}`;
});
button2.addEventListener("click", function() {
    like--;
    likeText.textContent = `Dislikes: ${Dislike}`;
});