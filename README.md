# JavaScript Learning Journey --- Day 1 to Day 22

A hands-on JavaScript learning journey covering core language
fundamentals, arrays and objects, modern JavaScript syntax, and browser
DOM interaction.

## About This Repository

This repository contains my daily JavaScript practice as I work through
a 30-day learning roadmap. From Day 1 to Day 22, I have progressed from
basic syntax to building interactive pages with the DOM.

**Progress:** 22 of 30 days completed\
**Remaining:** 8 days\
**Focus:** Learn by understanding concepts, solving practice questions,
and building small coding tasks.

------------------------------------------------------------------------

## What I Learned

### Day 1 --- JavaScript Fundamentals

-   What JavaScript is and how to run basic JavaScript.
-   `console.log()`
-   Variables using `let` and `const`
-   Basic data types
-   Variable naming rules
-   Template literals using backticks

### Day 2 --- Operators

-   Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`
-   Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`
-   Increment and decrement: `++`, `--`
-   Comparison operators: `>`, `<`, `>=`, `<=`, `===`, `!==`
-   Logical operators: `&&`, `||`, `!`
-   Built a marks calculator using totals, averages, and pass
    conditions.

### Day 3 --- Strings and String Methods

-   String length with `.length`
-   Character access with `[index]` and `.charAt()`
-   `.toUpperCase()` and `.toLowerCase()`
-   Searching with `.includes()`, `.startsWith()`, and `.endsWith()`
-   Removing surrounding whitespace with `.trim()`
-   Extracting text with `.slice()`
-   Built a username generator.

### Day 4 --- Conditional Statements

-   `if`, `else if`, and `else`
-   Nested `if` statements
-   Combining conditions with `&&` and `||`
-   Built a login access checker using username, password, and account
    status.

### Day 5 --- Loops

-   `for` loops
-   `while` loops
-   Incrementing and decrementing loop counters
-   Changing loop steps with expressions such as `i += 2`
-   Using `%` and `if/else` inside loops
-   Built a multiplication table generator.

### Day 6 --- Functions

-   Declaring and calling functions
-   Parameters and arguments
-   Functions with multiple parameters
-   Returning values with `return`
-   Difference between `return` and `console.log()`
-   Using functions with conditions and loops
-   Built a multiplication table function.

### Day 7 --- Functions with Logic

-   Combining functions, parameters, and `return`
-   Using conditions inside functions
-   Returning different results for different conditions
-   Practiced a student result checker and an electricity bill/discount
    calculator.

### Day 8 --- Scope

-   Global scope
-   Function scope
-   Block scope
-   Understanding where variables declared with `let` and `const` can be
    accessed
-   Practiced a login function using variables and conditions.

### Day 9 --- Arrays

-   Creating arrays
-   Zero-based indexing
-   Reading and updating array elements
-   Finding the number of elements with `.length`
-   Practiced reading and updating student marks.

### Day 10 --- Array Methods

-   Adding items with `.push()` and `.unshift()`
-   Removing items with `.pop()` and `.shift()`
-   Understanding how these methods change an array
-   Built a simple shopping cart exercise.

### Day 11 --- Looping Through Arrays

-   Using `for...of` to iterate over array values
-   Accumulator pattern for totals
-   Calculating the total of an array of prices.

### Day 12 --- `map()`

-   Transforming each item in an array
-   Creating a new array with `.map()`
-   Practiced increasing prices, converting names to uppercase, and
    adding marks.

### Day 13 --- `filter()`

-   Selecting array items that match a condition
-   Creating a filtered array with `.filter()`
-   Using comparison operators such as `>=` and `>`
-   Combining filter conditions with `&&`.

### Day 14 --- `find()`, `some()`, and `every()`

-   `.find()` to return the first matching item
-   `.some()` to check whether at least one item matches
-   `.every()` to check whether all items match.

### Day 15 --- Objects

-   Creating objects with properties and values
-   Accessing properties with dot notation and bracket notation
-   Updating and adding properties
-   Removing properties with `delete`.

### Day 16 --- Arrays of Objects

-   Storing multiple objects inside an array
-   Accessing object properties through array indexes
-   Looping through arrays of objects
-   Using methods such as `map()` and `filter()` with object data
-   Practiced calculating the total price of products.

### Day 17 --- Destructuring and Sorting

-   Destructuring values from arrays and properties from objects
-   Finding the largest and smallest values with loops
-   Sorting numbers in ascending order using `(a, b) => a - b`
-   Sorting numbers in descending order using `(a, b) => b - a`.

### Day 18 --- Spread and Rest

-   Using the spread syntax `...` to expand arrays or pass values
-   Using rest parameters `...` to collect multiple arguments
-   Practiced passing student objects to a function and displaying their
    names.

### Day 19 --- Arrow Functions

-   Writing arrow functions
-   Using concise implicit returns
-   Writing arrow functions with one or more parameters
-   Using arrow functions with `map()` and `filter()`
-   Practiced squares, greetings, even-number checks, price
    calculations, and formatting prices.

### Day 20 --- DOM Basics

-   Understanding the Document Object Model (DOM)
-   Selecting elements with `document.getElementById()` and
    `document.querySelector()`
-   Selecting IDs with `#` and classes with `.`
-   Updating text with `.textContent`
-   Updating HTML with `.innerHTML`
-   Practiced changing page content dynamically.

### Day 21 --- DOM Manipulation

-   Creating elements with `document.createElement()`
-   Setting element text with `.textContent`
-   Adding elements with `.appendChild()`
-   Removing elements with `.remove()`
-   Using loops to generate page content from arrays
-   Built a dynamic team-members list.

### Day 22 --- DOM Events

-   Handling clicks with `.addEventListener("click", ...)`
-   Updating page text after a user action
-   Keeping a numeric counter in a JavaScript variable
-   Updating DOM elements with template literals
-   Built click counters and practiced a like/dislike counter.

------------------------------------------------------------------------

## Skills Practiced by Day 22

-   JavaScript syntax, variables, and data types
-   Operators and conditional logic
-   Loops and functions
-   Strings, arrays, objects, and array methods
-   Destructuring, spread/rest syntax, and arrow functions
-   DOM selection and manipulation
-   Event handling and interactive UI behavior
-   Breaking problems into small steps and debugging mistakes

## Example: Click Counter

``` html
<button id="countBtn">Click me</button>
<p id="count">Count: 0</p>
```

``` javascript
const button = document.querySelector("#countBtn");
const countText = document.querySelector("#count");
let count = 0;

button.addEventListener("click", function () {
    count++;
    countText.textContent = `Count: ${count}`;
});
```

## Roadmap: Next Steps

-   **Day 23:** Forms and validation
-   **Day 24:** `localStorage`
-   **Day 25:** JSON
-   **Day 26:** Error handling
-   **Day 27:** Asynchronous JavaScript
-   **Day 28:** Fetch and APIs
-   **Day 29:** Mini project
-   **Day 30:** Final JavaScript project

## How I Learn

1.  Understand the concept.
2.  Study short examples.
3.  Solve practice questions.
4.  Complete a small coding task.
5.  Review mistakes and improve the code.

------------------------------------------------------------------------

**Status:** Day 1--22 completed. Continuing toward Day 30! 🚀
