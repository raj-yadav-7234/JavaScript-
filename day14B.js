let button = document.querySelector("#countBtn");
let countText = document.querySelector("#count");

let count = 0;

button.addEventListener("click", function() {
    count++;
    countText.textContent = `Count: ${count}`;
});