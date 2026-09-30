let numbers = [45, 12, 89, 23, 67];
let largest = numbers[0];
for (let number of numbers) {

    if (number > largest) {
        largest = number;
    }

}
console.log(largest)