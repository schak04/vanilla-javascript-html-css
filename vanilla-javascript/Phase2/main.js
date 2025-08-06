/*
Security & Performance:
  Security: Always validate and sanitize user input. Never trust data from users.
  Performance: Use async operations for network and heavy tasks. Avoid blocking the main thread.
Code Organization:
  For larger projects, organize code into modules and folders. Use import/export for maintainability.
*/

/*
JavaScript, though fundamentally single-threaded, achieves an asynchronous nature through various mechanisms,
enabling non-blocking operations and improved responsiveness in web applications.
This means that while JavaScript executes code in a single sequence, it can initiate time-consuming tasks
(like network requests or file I/O) in the background and continue processing other code without waiting
for these tasks to complete.
Key aspects and mechanisms contributing to JavaScript's asynchronous nature include:
- Callbacks:
    Functions passed as arguments to other functions, executed after a specific operation finishes.
    While effective, excessive nesting of callbacks can lead to "callback hell," impacting readability and maintainability.
- Promises:
    Objects representing the eventual completion or failure of an asynchronous operation and its resulting value.
    Promises offer a more structured and manageable way to handle asynchronous code compared to nested callbacks,
    with methods like .then() for success and .catch() for error handling.
- Async/Await:
    Syntactic sugar built on top of Promises, providing a more synchronous-looking way to write asynchronous code.
    The async keyword designates a function as asynchronous, allowing the use of await to pause execution until a
    Promise resolves, making asynchronous flows more readable and easier to reason about.
- Event Loop:
    A fundamental concept in JavaScript's concurrency model. The Event Loop continuously checks if the Call Stack
    (where synchronous code executes) is empty. If it is, the Event Loop moves tasks from the Message Queue
    (where asynchronous callbacks are placed after their operations complete) to the Call Stack for execution.
- Web APIs:
    Browser-provided APIs (like setTimeout, fetch, XMLHttpRequest) that handle asynchronous operations outside
    the main JavaScript thread. When these operations complete, their associated callbacks are placed in the Message Queue.
*/

/* DOM helper to print output */
function print(msg) {
    const out = document.getElementById("output");
    out.innerText = typeof msg === "object" ? JSON.stringify(msg, null, 2) : msg;
}

/* Async/Await + Promises */
async function runAsyncTask() {
    print("Running async task...");
    try {
        const result = await fakeFetch(true);
        print("Async success: " + result);
    } catch (e) {
        print("Async error: " + e);
    }
}

function fakeFetch(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve("Data loaded!") : reject("Fetch failed.");
        }, 1000);
    });
}

/* Fetch + JSON */
async function fetchData() {
    print("Fetching JSON...");
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        print(data);
    } catch (err) {
        print("Fetch error: " + err.message);
    }
}

/* LocalStorage */
function testStorage() {
    localStorage.setItem("phase2", "This is saved!");
    const val = localStorage.getItem("phase2");
    print("LocalStorage value: " + val);
}

/* Closures */
let closureCounter = createCounter();

function closureTest() {
    const count = closureCounter();
    print("Closure count: " + count);
}

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

/* Array Methods */
function arrayOperations() {
    const nums = [1, 2, 3, 4, 5];

    const doubled = nums.map(n => n * 2);
    const even = nums.filter(n => n % 2 === 0);
    const total = nums.reduce((acc, val) => acc + val, 0);

    print(`Original: ${nums.join(", ")}\nDoubled: ${doubled.join(", ")}\nEven: ${even.join(", ")}\nTotal: ${total}`);
}

/* Destructuring */
function destructuringDemo() {
    const person = { name: "Alex", age: 30, city: "London" };
    const { name, age } = person; // Object destructuring
    const arr = [10, 20, 30];
    const [first, , third] = arr; // Array destructuring
    print(`Name: ${name}, Age: ${age}, First: ${first}, Third: ${third}`);
}

/* Classes */
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

function classDemo() {
    const dog = new Dog("Rex");
    print(dog.speak());
}

/* Optional Chaining & Nullish Coalescing */
function optionalChainingDemo() {
    const user = { profile: { email: "a@b.com" } };
    const email = user.profile?.email ?? "No email";
    const phone = user.profile?.phone ?? "No phone";
    print(`Email: ${email}, Phone: ${phone}`);
}

/* Template Literals & Default Params */
function templateLiteralDemo(name = "Guest") {
    print(`Welcome, ${name}! Today is ${new Date().toLocaleDateString()}`);
}

/* Spread & Rest Operators */
function spreadRestDemo() {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combined = [...arr1, ...arr2];
    function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
    print(`Combined: ${combined.join(", ")}, Sum: ${sum(1, 2, 3, 4)}`);
}

/* Custom Events */
function customEventDemo() {
    document.addEventListener("myCustomEvent", e => print(`Custom event triggered! Detail: ${e.detail}`));
    const event = new CustomEvent("myCustomEvent", { detail: "Hello from custom event!" });
    document.dispatchEvent(event);
}

/* Callbacks: A callback in JavaScript is a function passed as an argument to another function.
Common Use Cases:
- Asynchronous Operations:
    Callbacks are crucial for tasks like fetching data from a server (e.g., using fetch or XMLHttpRequest),
    reading files, or interacting with databases, where the operation might take time and should not block the main thread.
- Event Handling:
    In user interfaces, callbacks are used to define what should happen when a specific event occurs
    (e.g., a button click, a key press, or a form submission).
- Timers:
    Functions like setTimeout() and setInterval() use callbacks to execute code after a specified delay or at regular intervals.
*/
function callbackDemo() {
    function doSomething(cb) { cb("Callback called!"); }
    doSomething(msg => print(msg));
}

/* more examples */

// 1

// greet(sup);
// function greet(callback1) {
//     console.log("Oi bruv");
//     callback1();
// }
// function sup(){
//     console.log("Sup");
// }
/* greet(sup(bidbye)); -> this is wrong and throws an error.
    The "Uncaught TypeError: callback is not a function" error in JavaScript indicates that a value expected
    to be a function, and subsequently called as such, is not actually a function.
    This error frequently arises in scenarios involving asynchronous operations, event handling,
    or higher-order functions that accept a callback as an argument. */
greet(() => sup(bidbye));
function greet(callback1) {
    console.log("Oi bruv");
    callback1();
}
function bidbye(){
    console.log("Bye");
}
function sup(callback2){
    console.log("Sup");
    callback2();
}

// 2

multiply(pagePrint, 4, 5);

function multiply(callback, a, b) {
    let prod = a*b;
    callback(prod);
}
// function consolePrint(prod) { // lesson: NEVER name a custom function 'console' -> it makes console.log() doesn't work
//     console.log(prod);
// }
function pagePrint(prod) {
    document.getElementById("output").textContent = prod; 
}

/* forEach: The forEach() method in JavaScript is a built-in function primarily used to iterate over
            elements in arrays, but it can also be applied to Maps and Sets. It executes a provided callback function
            once for each element in the collection. */

// 1
const games = ["Terraria", "Titanfall 2", "Dark Souls", "Blasphemous", "Minecraft", "Hollow Knight"];
games.forEach(display);
function display(i) {
    console.log(i);
}

// 2
/*
In-place mutation with forEach():
    forEach(callback) passes (element, index, array) -> position matters, names don't.
    This lets us modify the original array during iteration.
    Example: array[index] = some transformation of element;
CAUTION: This mutates the original array directly.
*/
const nums = [1, 8, 9, 7, 6, 5, 4, 0, 3, 2];
nums.forEach(double);
nums.forEach(display); // using display function defined in the first example

// function double(num) { // does not modify the original array
//     num = num*2;
//     console.log(num);
// }

function double(el, idx, arr) { // modifies the original array nums in place
    arr[idx] = el * 2;
}

/* Regex */
function regexDemo() {
    const str = "abc123xyz";
    const match = str.match(/\d+/);
    print(`Regex match for digits in '${str}': ${match}`);
}

/* Module */
function moduleDemo() {
    print("Modules let you split code into files and use import/export. See this file for examples!");
}

/* this */
function thisDemo() {
    const obj = {
        name: "Alex",
        regular: function () { return this.name; },
        arrow: () => this.name
    };
    print(`'this' in regular: ${obj.regular()}\n'this' in arrow: ${obj.arrow}`);
}

/* Arrow nuance */
function arrowNuanceDemo() {
    function Normal() { this.val = 1; }
    Normal.prototype.getVal = function () { return this.val; };
    const n = new Normal();
    const arrow = () => this;
    print(`Normal function 'this': ${n.getVal()}\nArrow function 'this': ${arrow()}`);
}

/* Debugging */
function debugDemo() {
    print("Use console.log(), breakpoints, and browser dev tools for debugging!");
}

/* JSON */
function jsonDemo() {
    const obj = { a: 1, b: 2 };
    const str = JSON.stringify(obj);
    const parsed = JSON.parse(str);
    print(`JSON Stringify: ${str}\nJSON Parse: ${JSON.stringify(parsed)}`);
}

/* Map Set */
function mapSetDemo() {
    const map = new Map();
    map.set("a", 1);
    map.set("b", 2);
    const set = new Set([1, 2, 2, 3]);
    print(`Map: ${JSON.stringify(Array.from(map.entries()))}\nSet: ${JSON.stringify(Array.from(set))}`);
}

/* Functional Programming */
function fpDemo() {
    const arr = [1, 2, 3, 4];
    const doubled = arr.map(x => x * 2);
    const filtered = arr.filter(x => x % 2 === 0);
    const sum = arr.reduce((a, b) => a + b, 0);
    print(`Functional Programming:\nDoubled: ${doubled}\nFiltered (even): ${filtered}\nSum: ${sum}`);
}

/* Error handling in async/await */
async function errorHandlingAsyncDemo() {
    print("Error handling in async/await:");
    try {
        await fakeFetch(false);
    } catch (e) {
        print(`Caught error: ${e}`);
    }
}

/* Dynamic Import */
async function dynamicImportDemo() {
    print("Dynamic import example (simulated):");
    // in real code: const module = await import('./someModule.js');
    print("Use import('./module.js') for dynamic loading in ES modules.");
}

/* Object keys */
function objectKeysDemo() {
    const obj = { a: 1, b: 2, c: 3 };
    print(`Object.keys: ${Object.keys(obj)}\nObject.values: ${Object.values(obj)}\nObject.entries: ${JSON.stringify(Object.entries(obj))}`);
}

/* addEventListener */
function addEventListenerDemo() {
    const btn = document.createElement('button');
    btn.textContent = 'Click Me (addEventListener)';
    btn.onclick = () => btn.remove();
    btn.addEventListener('click', () => print('Button clicked using addEventListener!'));
    document.body.appendChild(btn);
}

/* Form Submission */
function formSubmissionDemo() {
    print("Form submission: Prevent default and validate input.");
    const form = document.createElement('form');
    form.innerHTML = `<input type='text' id='demoInput' placeholder='Type something'><button>Submit</button>`;
    form.onsubmit = function (e) {
        e.preventDefault();
        const val = form.querySelector('#demoInput').value;
        print(val ? `Submitted: ${val}` : 'Please enter something!');
        form.remove();
    };
    document.body.appendChild(form);
}