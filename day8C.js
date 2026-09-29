let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];
let result = products.filter(function(product){
    return product.price>5000;
});
console.log(result);