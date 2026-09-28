let prices = [500, 1200, 800, 2500, 1500];
let result = prices.find(function(num){
    return num>2000;
})
let answer = prices.some(function(num){
    return num<600;
})
let res =prices.every(function(num){
    return num>400;
})
console.log(result);
console.log(answer);
console.log(res);