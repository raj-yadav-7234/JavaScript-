
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
console.log(`Top Student: ${largest.name} - ${largest.marks}`);
let smallest = students[0];
for (let number of students) {

    if (number.marks < smallest.marks) {
        smallest = number;
    }

}
console.log(`Low Student: ${smallest.name} - ${smallest.marks}`);
let result = students.filter(function(student){
    return student.marks>=40;
});
console.log(result);
let newresult = students.map(function(student){
    return student.name;
});
console.log(newresult);
function showStudents(...students) {

    for(let student of students){
        
        console.log(student.name);
    }
}
showStudents(...students);