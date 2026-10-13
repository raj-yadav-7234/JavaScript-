let button = document.querySelector("#helloBtn");
let parragraph = document.querySelector("#output");
button.addEventListener("click", function(){
    parragraph.textContent = "Hello Raj!";
});