let heading = document.getElementById("title");
heading.textContent = "Welecome to JavaScript";

let paragraph = document.getElementById("message");
paragraph.textContent = "Hello Raj, JavaScript is awesome!";

let paragraph = document.querySelector(".paragraph");
paragraph.textContent = "I am learning DOM";

let heading = document.getElementById("#title");
paragraph.textContent = "DOM Manipulation";

let heading = document.querySelector("#box")
heading.innerHTML = "<strong>JavaScript is powerful!</strong>";

let card = document.querySelector("#card");
card.innerHTML = `
    <h2>TeamForge</h2>
    <p>Build projects. Find teammates.</p>
`;