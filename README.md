JavaScript Learning Journey 

This repository contains my JavaScript learning journey, including daily practice, concepts, and small coding tasks.

Day 1 — JavaScript Basics
Topics Covered
Introduction to JavaScript
console.log()
Variables
let and const
Data Types
String
Number
Boolean
Variable naming
Template literals
String interpolation using ${}
Practice

Practiced:

Creating variables
Working with different data types
Using let and const
Printing values using console.log()
Using template literals
Small Task

Created a basic student information program using:

Name
Age
Course
College
Student status
Day 1B — Operators
Topics Covered
Arithmetic Operators
+
-
*
/
%
**
Assignment Operators
=
+=
-=
*=
/=
Increment and Decrement
++
--
Comparison Operators
>
<
>=
<=
===
!==
Logical Operators
&&
||
!
Practice

Practiced:

Arithmetic calculations
Updating variable values
Comparing values
Combining conditions using logical operators
Small Task

Created a Marks Calculator that calculates:

Total marks
Average marks
Pass/Fail status

Example:

let math = 80;
let physics = 75;
let chemistry = 85;

let total = math + physics + chemistry;
let average = total / 3;

let passed = math >= 40 && physics >= 40 && chemistry >= 40;

console.log(`Total: ${total}`);
console.log(`Average: ${average}`);
console.log(`Passed: ${passed}`);
Day 1C — Strings & String Methods
Topics Covered
Strings
String length
Character indexing
charAt()
toUpperCase()
toLowerCase()
includes()
startsWith()
endsWith()
trim()
slice()
Practice

Practiced:

Finding string length
Changing letter case
Accessing individual characters
Checking whether a string contains specific text
Removing extra spaces
Extracting parts of a string
Small Task — Username Generator

Created a username generator using:

let firstName = "Raj";
let lastName = "Yadav";
let language = "JavaScript";

let username =
    firstName.toLowerCase() + "_" +
    lastName.toLowerCase() + "_" +
    language.toLowerCase();

console.log(username);
Output
raj_yadav_javascript
