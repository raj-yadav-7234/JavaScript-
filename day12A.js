let prices = [500, 1200, 800, 2500, 1500];
let result = prices.map((price)=>
     price + price*10/100);
console.log(result);
let newResult = prices.filter((price) => price>=1000);
console.log(newResult);
let finalresult = prices.map((price)=> `${price}`);
console.log(finalresult);