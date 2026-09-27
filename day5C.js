let students = ["raj", "amit", "rahul", "neha"];
let names = students.map(function(student){
    return student.toLocaleUpperCase();
});
console.log(names);