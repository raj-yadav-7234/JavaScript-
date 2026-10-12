let items = ["Milk", "Bread", "Apples"];
let shoppingList = document.querySelector("#shoppingList");
for (let item of items) {
    let list = document.createElement("li");

    list.textContent = item;

    shoppingList.appendChild(list)
}

let members = ["Raj", "Aman", "Priya", "Neha"];
let teamMembers = document.querySelector("#teamMembers");
for (let member of members){
    let list = document.createElement("li");
    list.textContent = member;
    teamMembers.appendChild(list);
};