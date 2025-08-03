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

/* Callbacks */
function callbackDemo() {
    function doSomething(cb) { cb("Callback called!"); }
    doSomething(msg => print(msg));
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
        regular: function() { return this.name; },
        arrow: () => this.name
    };
    print(`'this' in regular: ${obj.regular()}\n'this' in arrow: ${obj.arrow}`);
}

/* Arrow nuance */
function arrowNuanceDemo() {
    function Normal() { this.val = 1; }
    Normal.prototype.getVal = function() { return this.val; };
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
    form.onsubmit = function(e) {
        e.preventDefault();
        const val = form.querySelector('#demoInput').value;
        print(val ? `Submitted: ${val}` : 'Please enter something!');
        form.remove();
    };
    document.body.appendChild(form);
}

/*
Security & Performance:
  Security: Always validate and sanitize user input. Never trust data from users.
  Performance: Use async operations for network and heavy tasks. Avoid blocking the main thread.
Code Organization:
  For larger projects, organize code into modules and folders. Use import/export for maintainability.
*/