let marks = [72, 45, 81, 33, 67];
let result = marks.find(function(num){
    return num>70;
})
let answer = marks.some(function(num){
    return num<35;
})
let res = marks.every(function(num){
    return num>=30;
})
console.log(result);
console.log(answer);
console.log(res);