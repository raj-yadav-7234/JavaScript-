let numbers = [45, 12, 89, 23, 67];
let smallest = numbers[0];
for (let number of numbers) {

    if (number < smallest) {
        smallest = number;
    }

}
console.log(smallest);