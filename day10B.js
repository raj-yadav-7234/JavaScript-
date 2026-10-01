let students = [
    { name: "Raj", marks: 85 },
    { name: "Aman", marks: 42 },
    { name: "Priya", marks: 91 },
    { name: "Rohit", marks: 28 },
    { name: "Neha", marks: 67 }
]
for(let student of students){
     
    console.log(student.name);
}
let largest = students[0];
for (let number of students) {

    if (number.marks > largest.marks) {
        largest = number;
    }

}
console.log(largest.marks)