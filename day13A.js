let Container = document.querySelector("#container");

let paragraph = document.createElement("p");
paragraph.textContent = "I am learning JavaScript";

container.appendChild(paragraph);

let container = document.querySelector("#container");
container.remove();