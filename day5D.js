let prices = [500, 1200, 800, 2500];
let result = prices.map(function(price){
    return price + price*10/100;
});
console.log(result);