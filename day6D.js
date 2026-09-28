let prices = [499, 1200, 799, 2500, 350, 1800, 999];
let result = prices.filter(function(price){
    return price>=1000;
});
console.log(result);