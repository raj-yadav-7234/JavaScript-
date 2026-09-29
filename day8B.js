let students =[
     { name: "Raj", marks: 85 },
    { name: "Aman", marks: 72 },
    { name: "Priya", marks: 91 }
]
for (let student of students) {
    console.log(student.name);
}
students[1].marks = 88;
console.log(students[2].marks)
console.log(students[1].marks)