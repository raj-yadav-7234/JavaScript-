let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
let total = 0;
for (let product of products) {
    total = total + product.price;
}

console.log(`Total: ₹${total}`);