let numbers = [12, 7, 25, 40, 9, 18, 31];
let result = numbers.filter(function(num){
    return num >10 && num<30;
});
console.log(result);