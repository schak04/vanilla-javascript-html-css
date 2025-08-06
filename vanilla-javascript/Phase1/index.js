/*
Accessibility & Semantic HTML Note:
  Use semantic HTML tags (header, nav, main, footer, section, article)
  and proper labels for accessibility.
*/

/* Variables */
let name = "Sapto";            // Can be reassigned
const age = 20;                // Constant, cannot be reassigned
// var state = "West Bengal";  // Older way, avoid using
// const = a variable that can't be changed
// naming convention: constants (primitive datatypes like numbers and booleans) -> UPPERCASE.
// reference datatypes like strings don't normally follow this convention
const PI = 3.14;
let radius;
let circumference;
// PI = 420.69;
document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}

/* Variable Scope: where a variable is recognized and accessible (local vs global) */         
let x1 = 3; // global scope
function1();
function function1(){
    let x1 = 1; // local scope
    console.log(x1);
}
function function2(){
    let x1 = 2; // local scope
    console.log(x1);
}

/* Data Types */
let str = "Hello";   // -> String
let num = 123;       // -> Number
let bool = true;     // -> Boolean
let undef;           // -> Undefined
let nul = null;      // -> Null

/* Arithmetic Operators */
let students = 31;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 3;
// console.log(`Extra students = ${extraStudents}`);

// augmented assignment operators: +=, -=, *=, etc.
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;

// console.log(`Students = ${students}`);

// let preIncrement = ++students; // Pre-increment: increases first, then assigns
// console.log(`Pre-incremented students = ${preIncrement}`);

// let postIncrement = students++; // Post-increment: assigns first, then increases
// console.log(`Post-incremented students = ${postIncrement}`);

// let preDecrement = --students; // Pre-decrement: decreases first, then assigns
// console.log(`Pre-decremented students = ${preDecrement}`);

// let postDecrement = students--; // Post-decrement: assigns first, then decreases
// console.log(`Post-decremented students = ${postDecrement}`);

/*
Operator Precedence:
1. Parentheses () 
2. Exponents **
3. Multiplication *, Division /, Modulo %
4. Addition +, Subtraction -
5. Assignment =, +=, -=, etc.
Associativity:
- Most operators (like +, -, *, /, %) are evaluated left to right (left-associative).
- Assignment (=, +=, etc.) and exponentiation (**) are evaluated right to left (right-associative).
Note:
- "Modulo" refers to the operation (%) that gives the remainder after division.
- "Modulus" is the result of the modulo operation, or sometimes refers to the absolute value of a number (e.g., Math.abs()).
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
/*
=     assignment operator
==    comparison operator (compare if values are equal)
===   strict equality operator (compare if values & datatypes are equal)
!=    inequality operator
!==   strict inequality operator
*/
const Seven = 7;
if(Seven !== "7"){
    console.log("That is NOT Seven");
}
else{
    console.log("That is Seven");
}

/* Functions: Blocks of reusable code. Declare once, use whenever. */
function greet(userName) {
    return `Hello, ${userName}!`;
}
function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(happyBirthday("Sapto", 25));
console.log(isValidEmail("s123@gmail.com"));

/* Arrow Functions (ES6+): A concise way to write function expressions
   Syntax: (parameters) => { statements } or (parameters) => expression
   
   Key Differences from Regular Functions:
   1. Shorter syntax
   2. No binding of 'this' (lexical scoping)
   3. No 'arguments' object
   4. Cannot be used as constructors (no 'new' keyword)
   5. No 'prototype' property
*/

// Basic Arrow Function Examples
const add = (a, b) => a + b;
const multiply = (x, y) => x * y;
const greet = name => `Hello, ${name}!`; // Single parameter can omit parentheses
const getRandom = () => Math.random(); // No parameters need empty parentheses

// Arrow Functions with Multiple Statements
const processUser = (name, age) => {
    const isAdult = age >= 18;
    const status = isAdult ? 'adult' : 'minor';
    return `${name} is an ${status}`;
};

// Arrow Functions in Array Methods
const numbersArray = [1, 2, 3, 4, 5];
const doubled = numbersArray.map(num => num * 2);
const evens = numbersArray.filter(num => num % 2 === 0);
const sum = numbersArray.reduce((acc, num) => acc + num, 0);

// Arrow Functions with Object Destructuring
const getUserInfo = ({ name, age, city }) => `${name} is ${age} years old from ${city}`;

// Arrow Functions as Callbacks
setTimeout(() => console.log('Delayed execution'), 1000);
const button = document.getElementById('myButton');
button.addEventListener('click', () => alert('Button clicked!'));

// Arrow Functions vs Regular Functions - 'this' binding
const personObj = {
    name: 'John',
    regularMethod: function() {
        setTimeout(function() {
            console.log('Regular function:', this.name); // 'this' is undefined
        }, 100);
    },
    arrowMethod: function() {
        setTimeout(() => {
            console.log('Arrow function:', this.name); // 'this' refers to person
        }, 100);
    }
};

// Nested Arrow Functions (Higher-Order Functions)
const createMultiplier = (factor) => (number) => number * factor;
const double = createMultiplier(2);
const triple = createMultiplier(3);

// Arrow Functions with Default Parameters
const createGreeting = (name = 'Guest', greeting = 'Hello') => `${greeting}, ${name}!`;

// Arrow Functions with Rest Parameters
const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

// Arrow Functions with Conditional Logic
const getStatus = (age) => age >= 18 ? 'adult' : 'minor';

// Arrow Functions in Object Methods (not recommended for methods)
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    // Note: Arrow functions don't bind 'this' properly in object methods
};

// Arrow Functions with Template Literals
const createEmail = (name, domain) => `${name.toLowerCase()}@${domain}`;

// Arrow Functions for Event Handling
const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form submitted:', Object.fromEntries(formData));
};

// Arrow Functions with Error Handling
const safeDivide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero!');
    }
    return a / b;
};

// Arrow Functions for Data Transformation
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const getAdultNames = (userList) => 
    userList
        .filter(user => user.age >= 18)
        .map(user => user.name);

// Arrow Functions with Async Operations
const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`/api/users/${userId}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

// Arrow Functions for Sorting
const sortByAge = (a, b) => a.age - b.age;
const sortByName = (a, b) => a.name.localeCompare(b.name);

// Arrow Functions with Currying
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return (...moreArgs) => curried.apply(this, args.concat(moreArgs));
    };
};

const curriedAdd = curry((a, b, c) => a + b + c);
const addFive = curriedAdd(5);
const addFiveAndThree = addFive(3);

console.log('Arrow function examples loaded!');

/* Conditionals */
if (age >= 18) {
    console.log("You're an adult.");
} else {
    console.log("You're a minor.");
}

/* Ternary Operator: a shortcut to if{} and else{} statements -> helps to assign a variable based on a condition.
   condition ? codeIfTrue : codeIfFalse; */
let access = age >= 18 ? "Granted" : "Denied";
let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ₹${purchaseAmount - purchaseAmount * (discount/100)}`);

/* Loops */
/* for loop: repeat some code a LIMITED amount of times */
for (let i = 0; i < 3; i++) {
    console.log("For loop:", i);
}
// increment
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// decrement
for (let i = 10; i > 0; i--) {
    console.log(i);
}

/* while loop: repeat some code WHILE some condition is true */
let i = 0;
while (i < 3) {
    console.log("While loop:", i);
    i++;
}
let loggedIn = false;
let username2;
let password2;
while(!loggedIn){
    username2 = window.prompt(`Enter your username`);
    password2 = window.prompt(`Enter your password`);
    if(username2 === "myUsername" && password2 === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}

/* Arrays */
let fruits = ["apple", "banana", "mango"];
fruits.push("grape");     // push -> add an element to the end of the array // same as doing -> array[array.length] = element;
fruits.pop();             // pop -> removes the last element
fruits.unshift("orange"); // unshift -> adds an element to the beginning of the array
fruits.shift();           // shift -> removes the first element
let sizeOfFruits = fruits.length;
console.log(sizeOfFruits);
// for (let i=0; i<sizeOfFruits; i++) {
//     console.log(`${fruits[i]} `);
// }
for (let fruit of fruits) {
    console.log(`${fruit} `);
}
// fruits.forEach((fruit) => {
//     console.log("Fruit:", fruit);
// });
// console.log(fruits); // this works too -> prints the entire array in the console
// console.log(fruits[0]); // indexed access -> index 0
// fruits[0] = tomato; // an element at a certain index can be changed like this
let indexOfBanana = fruits.indexOf("banana"); // returns index of element if it exists, and -1 otherwise
console.log(`Index of banana: ${indexOfBanana}`);
// fruits.sort(); // sorts elements in alphabetical order 
// fruits.sort().reverse(); // reverses the order 

/* 2D Arrays -> a.k.a. Matrices */
const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];

// matrix[0][0] = 'X';
// matrix[0][1] = 'O';
// matrix[0][2] = 'X';

// matrix[1][0] = 'O';
// matrix[1][1] = 'X';
// matrix[1][2] = 'O';

// matrix[2][0] = 'X';
// matrix[2][1] = 'O';
// matrix[2][2] = 'X';

for(let row of matrix) {
    const rowString = row.join(' ');
    console.log(rowString);
}

/* Objects */
let person = {
    name: "Sapto",
    age: 20,
    isStudent: true,
};
console.log("Person's name:", person.name);

/* Spread Operator ... (ES6): It allows an iterable such as an array or a string or an object to be expanded into individual elements.
                          It essentially "spreads" out the contents of an iterable. */
// example 1
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // we can't directly put the array as the argument
let minimum = Math.min(...numbers);
console.log(maximum);
// example 2
let myFirstName = "Saptaparno";
let letters = [...myFirstName].join("-");
console.log(letters);
// example 3
let froooots = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...froooots, ...vegetables, "eggs", "milk"];
console.log(foods);
// example 4
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

/* Rest parameters (...args): They allow a function to accept an indefinite number of arguments as an array.
                              They are denoted by three dots followed by the parameter name, and this
                              parameter must be the last parameter in the function's parameter list. 
    spread -> expands an array into separate elements
    rest -> bundles separate elements into an array
*/

// example 1
function openFridge(...foooods){console.log(...foooods);}
function getFood(...foooods){return foooods;}
const food1 = "biryani";
const food2 = "chicken curry";
const food3 = "palak paneer";
const food4 = "roshomalai";
const food5 = "phuchka";
openFridge(food1, food2, food3, food4, food5);
const foooods = getFood(food1, food2, food3, food4, food5);

// example 2
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const average = getAverage(75, 100, 85, 90, 50);
console.log(average);

// example 3
function combineStrings(...strings){return strings.join(" ");}
const fullllName = combineStrings("Mr.", "Saptaparno", "Chakraborty");
console.log(fullllName);

/* DOM Manipulation */
function showAlert() {
    alert("Button was clicked!"); // alert <-> window.alert (same thing)
    document.getElementById("demoPara").innerText = "You clicked the button!";
}
function readInput() {
    const input = document.getElementById("inputBox").value;
    document.getElementById("outputBox").innerText = "You typed: " + input;
}

/* Events (handled inline in HTML) */

/* Error Handling */
try {
    let x = y + 1; // y is not defined
} catch (error) {
    console.log("An error occurred:", error.message);
}

/* Comments */
// This is a single-line comment

/*
This is a 
multi-line comment
*/

/* User Input:
    Easy way -> window.prompt (simple)
    Professional way -> HTML textbox (preferred for real apps)
*/
/* Prompt method (simple) // prompt <-> window.prompt (same thing) */
let userInput = prompt("Enter your favorite number:"); // Accept user input as a string
let favNumber = Number(userInput); // Convert input to a number
if (!isNaN(favNumber)) { // Check if conversion was successful
    console.log(`Your favorite number is ${favNumber}`);
} else {
    console.log("That's not a valid number!");
}
/* Professional way: HTML textbox and button */
/*
This is added in my HTML file:
  <input id="favNumInput" type="number" placeholder="Enter your favorite number">
  <button onclick="readFavNumber()">Submit</button>
  <p id="favNumOutput"></p>
*/
function readFavNumber() {
    const val = document.getElementById("favNumInput").value;
    const num = Number(val);
    if (!isNaN(num) && val !== "") {
        document.getElementById("favNumOutput").innerText = `Your favorite number is ${num}`;
    } else {
        document.getElementById("favNumOutput").innerText = "That's not a valid number!";
    }
}

/* Type Conversion: change the datatype of a value to another (strings, numbers, booleans) */
// example 1
let age1 = window.prompt("How old are you?");
age1 = Number(age1);
age1+=1;
console.log(age1, typeof age1);
// example 2
let x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/* More */
function setExtraOutput(msg) {
    document.getElementById("extraOutput").innerText = msg;
}
/* switch-case */ 
function switchDemo() {
    let day = new Date().getDay();
    let dayName;
    switch(day) {
        case 0: dayName = "Sunday"; break;
        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
        default: dayName = "Unknown";
    }
    setExtraOutput(`Switch Statement: Today is ${dayName}`);
}

const day = 7; 
switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
        // break; // -> optional
}

/*
Logical Operators: used to combine or manipulate Boolean values (true or false)              
- AND = &&
- OR  = ||
- NOT = !
*/
function logicalDemo() {
    let a = true, b = false;
    let and = a && b;
    let or = a || b;
    let notA = !a;
    setExtraOutput(`Logical Operators:\nAND: ${and}\nOR: ${or}\nNOT A: ${notA}`);
}

/* Comparison */
function comparisonDemo() {
    let x = 5, y = "5";
    let eq = x == y;
    let strictEq = x === y;
    let neq = x != y;
    let strictNeq = x !== y;
    let gt = x > 3;
    let lt = x < 10;
    setExtraOutput(`Comparison Operators:\nx == y: ${eq}\nx === y: ${strictEq}\nx != y: ${neq}\nx !== y: ${strictNeq}\nx > 3: ${gt}\nx < 10: ${lt}`);
}

/* String Methods */
let userName = "SaptoCodes";
let phoneNumber = "123-456-7890";
// console.log(userName.length); // In JavaScript, .length & .length() are used alike (unlike in Java).
// console.log(userName.charAt(0));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// userName = "  Sapto Codes   "; userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// userName = userName.repeat(3);
// let result = userName.startsWith(" ");
// let result = userName.endsWith(" ");
// let result = userName.includes(" ");
// phoneNumber = phoneNumber.replaceAll("-", "");
// phoneNumber = phoneNumber.padStart(15, "0");
// phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);

function stringMethodsDemo() {
    let str = "JavaScript Demo";
    let upper = str.toUpperCase();
    let lower = str.toLowerCase();
    let includes = str.includes("Demo");
    let sliced = str.slice(0, 10);
    setExtraOutput(`String Methods:\nOriginal: ${str}\nUpper: ${upper}\nLower: ${lower}\nIncludes 'Demo': ${includes}\nSlice(0,10): ${sliced}`);
}

/* String Slicing: creating a substring from a portion of another string
   string.slice(start, end) */
// example 1
const fullName = "Saptaparno Chakraborty";
// let firstName = fullName.slice(0, 10);
// let lastName = fullName.slice(11, 22);
// let lastName = fullName.slice(11); // if ending index not included, it's taken as default
let firstName = fullName.slice(0, fullName.indexOf(" ")); // more dynamic 
let lastName = fullName.slice(fullName.indexOf(" ")+1); // more dynamic 
let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);
console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
// example 2
const email = "Sapto123@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);

/* Array Methods */
function arrayMethodsDemo() {
    let arr = [1, 2, 3, 4, 5];
    let found = arr.find(n => n > 3);
    let idx = arr.findIndex(n => n === 3);
    let some = arr.some(n => n % 2 === 0);
    let every = arr.every(n => n > 0);
    let sorted = [...arr].sort((a, b) => b - a);
    setExtraOutput(`Array Methods:\nOriginal: ${arr.join(", ")}\nFind >3: ${found}\nFindIndex 3: ${idx}\nSome even: ${some}\nEvery >0: ${every}\nSorted desc: ${sorted.join(", ")}`);
}

/* Date */
function dateDemo() {
    let now = new Date();
    let dateStr = now.toLocaleDateString();
    let timeStr = now.toLocaleTimeString();
    setExtraOutput(`Date/Time:\nDate: ${dateStr}\nTime: ${timeStr}`);
}

/* Timer */
function timerDemo() {
    setExtraOutput("Timer started! Message will appear in 2 seconds...");
    setTimeout(() => {
        setExtraOutput("Timer finished! 2 seconds passed.");
    }, 2000);
}

/* Form Validation */
function formValidationDemo() {
    let val = prompt("Enter your email:");
    let valid = val && val.includes("@") && val.includes(".");
    setExtraOutput(valid ? `Valid email: ${val}` : "Invalid email!");
}

/* Module */
function moduleDemo() {
    setExtraOutput("Modules let you split code into files and use import/export. See Phase2 for real usage!");
}

/* for in loop */
function forInDemo() {
    let obj = {a: 1, b: 2, c: 3};
    let result = '';
    for (let key in obj) {
        result += `${key}: ${obj[key]}\n`;
    }
    setExtraOutput(`for...in loop over object:\n${result}`);
}

/* for of loop */
function forOfDemo() {
    let arr = ["apple", "banana", "cherry"];
    let result = '';
    for (let fruit of arr) {
        result += `${fruit}\n`;
    }
    setExtraOutput(`for...of loop over array:\n${result}`);
}

/* confirm */
function confirmDemo() {
    let answer = confirm("Do you like JavaScript?");
    setExtraOutput(answer ? "Great!" : "Give it a chance!");
}

/* JSON */
function jsonDemo() {
    let obj = {name: "Sapto", age: 20};
    let str = JSON.stringify(obj);
    let parsed = JSON.parse(str);
    setExtraOutput(`JSON Stringify: ${str}\nJSON Parse: ${JSON.stringify(parsed)}`);
}

/* Exception Handling */
function tryCatchInputDemo() {
    try {
        let val = prompt("Enter a number:");
        let num = Number(val);
        if (isNaN(num)) throw new Error("Not a number!");
        setExtraOutput(`You entered: ${num}`);
    } catch (e) {
        setExtraOutput(`Error: ${e.message}`);
    }
}

/* JS Math Object: built-in object that provides a collection of properties and methods */
let a = 3;
let b = 2;
let c = 1;
// console.log(Math.PI);
// console.log(Math.E);
// z = Math.round(a);
// z = Math.floor(a);
// z = Math.ceil(a);
// z = Math.trunc(a);
// z = Math.pow(a, b);
// z = Math.sqrt(a);
// z = Math.log(a);
// z = Math.sin(a);
// z = Math.cos(a);
// z = Math.tan(a);
// z = Math.abs(a);
// z = Math.sign(a);
// let randomNum = Math.random();
// randomNum = Math.random() * 6; // gives a random float between 0 and 6 (6 exclusive)
// randomNum = Math.floor(Math.random() * 6); // gives a random integer between 0 and 5
// randomNum = Math.floor(Math.random() * 6) + 1; // gives a random integer between 1 and 6
// const mx = 100, mn = 50; const rndm = Math.floor(Math.random() * (mx-mn)) + mn; // gives a random number between 50 and 100
let max = Math.max(a, b, c);
let min = Math.min(a, b, c);
console.log(min);

/* Method Chaining: calling one method after another in one continuous line of code */                      
let username1 = window.prompt("Enter your username: ");
/* no method chaining */
/*
username1 = username1.trim();
let letter = username1.charAt(0);
letter = letter.toUpperCase();
let extraChars = username1.slice(1);
extraChars = extraChars.toLowerCase();
username1 = letter + extraChars;
console.log(username1);
*/
/* method chaining */
username1 = username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase();
console.log(username1);