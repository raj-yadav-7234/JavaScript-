let numbers = [34, 7, 91, 15, 62, 3];
let largest = numbers[0];
let smallest = numbers[0];
for(let number of numbers){
    if (number>largest) {
        largest = number
        
    }
}
for(let number of numbers){
    if (number<smallest) {
        smallest = number
        
    }
}
numbers.sort(function(a, b){
    return a - b ;
})
console.log(largest);
console.log(smallest);
console.log(numbers);