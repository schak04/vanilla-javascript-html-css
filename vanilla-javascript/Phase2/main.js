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

/* Classes:
    JavaScript classes, introduced in ECMAScript 2015 (ES6), provide a more structured
    and object-oriented way to create objects with shared properties and methods.
    While JavaScript fundamentally uses a prototype-based inheritance model, classes offer
    a syntactic sugar layer over this, making it easier for devs familiar with class-based
    languages like C++ or Java (hence, devs like me, as I'm familiar with both) to write
    object-oriented code in JavaScript.
    
    Note:
    In JavaScript, we usually don't need to declare class fields before using them in the
    constructor because of how JavaScript handles object properties dynamically at runtime.
    Fields are dynamically added to the object when we assign them in the constructor. */

// 1
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

// 2
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayItem() {
        console.log(`Item: ${this.name}`);
        console.log(`Price: ₹${this.price.toFixed(2)}`);
    }
    calculateTotal(GST) {
        return this.price + (this.price * GST);
    }
}
const GST = 0.15;
const item1 = new Item("Razor", 40);
const item2 = new Item("Soap", 100);
const item3 = new Item("Boxers", 299);
item1.displayItem();
const totalPrice = item1.calculateTotal(GST);
console.log(`Total price (with GST) for ${item1.name}: ₹${totalPrice.toFixed(2)}`);

/* static keyword:
    In JavaScript, the static keyword is used within class definitions to define methods
    or properties that belong to the class itself, rather than to instances of the class. */

// 1
class Circle {
    static PI = 3.14159;
    static getDiameter(radius) {
        return radius * 2;
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}
console.log(Circle.PI); // no need to make objects cuz static
console.log(Circle.getDiameter(12));
console.log(Circle.getCircumference(12));
console.log(Circle.getArea(12));

// 2
class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    sayHello() {
        console.log(`Hello, my username is ${this.username}.`);
    }
    static getUserCount() {
        console.log(`There are ${User.userCount} users online.`);
    }
}
const user1 = new User("Sapto");
const user2 = new User("Solaire");
const user3 = new User("Geralt");
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

/* Inheritance: (allows a new class to inherit properties and methods from an existing class; helps with code reusability)
    It is a mechanism that allows objects (in JS) to acquire properties and methods from other objects,
    promoting code reusability and establishing relationships between them.
    Unlike class-based languages, JavaScript primarily uses prototypal inheritance. */

class Animals {
    alive = true; // no 'let' or 'const' needed as this is a class field (not a scoped variable)
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}
class TerrestrialAnimal extends Animals {
    name = "dog";
    run() {
        console.log(`This ${this.name} is running`);
    }
}
class AquaticAnimal extends Animals {
    name = "shark";
    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}
class AerialAnimal extends Animals {
    name = "eagle";
    fly() {
        console.log(`This ${this.name} is flying`);
    }
}
const terrestrial = new TerrestrialAnimal();
const aquatic = new AquaticAnimal();
const aerial = new AerialAnimal();
console.log(terrestrial.alive);
terrestrial.eat();
terrestrial.sleep();
terrestrial.run();

/* super keyword:
    The super keyword in JavaScript is used within classes to refer to the parent class
    (or superclass) and access its members. It is primarily used in the context of class inheritance. */

class Pokemon {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    move(speed) {
        console.log(`${this.name} moves at a speed of ${speed} m/s`);
    }
}
class Pikachu extends Pokemon {
    constructor(name, level, runSpeed) {
        super(name, level);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`${this.name} uses Quick Attack!`);
        super.move(this.runSpeed);
    }
}
class Squirtle extends Pokemon {
    constructor(name, level, swimSpeed) {
        super(name, level);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`${this.name} uses Surf!`);
        super.move(this.swimSpeed);
    }
}
class Pidgeot extends Pokemon {
    constructor(name, level, flySpeed) {
        super(name, level);
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`${this.name} uses Fly!`);
        super.move(this.flySpeed);
    }
}
const pikachu = new Pikachu("Pikachu", 15, 35);
const squirtle = new Squirtle("Squirtle", 12, 20);
const pidgeot = new Pidgeot("Pidgeot", 36, 80);
pikachu.run();
squirtle.swim();
pidgeot.fly();

/* Getters & Setters:
    In JavaScript, getters and setters are special methods used to control access
    to object properties. They allow for the retrieval (get) and modification (set)
    of property values, often providing a layer of abstraction and enabling validation
    or other logic during property access. 
    
    getter = special method that makes a property readable
    setter = special method that makes a property writeable
    These validate and modify a value when reading/writing a property.

    Note:
    Inside a `set` or `get`, don’t use the same name
    as the setter/getter. It causes infinite recursion.
    Add an underscore before it instead. 
    
    underscore = private */

// 1
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(w) {
        if (w > 0) {
            this._width = w;
        }
        else {
            console.error("Width must be a positive number");
        }
    }
    set height(h) {
        if (h > 0) {
            this._height = h;
        }
        else {
            console.error("Height must be a positive number");
        }
    }
    get width() {
        return `${this._width.toFixed(1)} cm`;
    }
    get height() {
        return `${this._height.toFixed(1)} cm`;
    }
    get area() { // area can be accessed as a property using this getter, even though it isn't one
        return `${(this._width * this._height).toFixed(1)} cm²`; // win + ; -> math symbols -> number superscripts -> ²
    }
}
const rectangle = new Rectangle(2, 3);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// 2
class Puhhhhson {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(fn) {
        if (typeof fn === "string" && fn.length > 0) {
            this._firstName = fn;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(ln) {
        if (typeof ln === "string" && ln.length > 0) {
            this._lastName = ln;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(a) {
        if (typeof a === "number" && a >= 0) {
            this._age = a;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    get age() {
        return this._age;
    }
}
const puhhson = new Puhhhhson("Ash", "Ketchum", 10);
console.log(puhhson.firstName);
console.log(puhhson.lastName);
console.log(puhhson.fullName);
console.log(puhhson.age);

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
function bidbye() {
    console.log("Bye");
}
function sup(callback2) {
    console.log("Sup");
    callback2();
}

// 2
multiply(pagePrint, 4, 5);
function multiply(callback, a, b) {
    let prod = a * b;
    callback(prod);
}
// function consolePrint(prod) { // lesson: NEVER name a custom function 'console' -> it makes console.log() doesn't work
//     console.log(prod);
// }
function pagePrint(prod) {
    document.getElementById("output").textContent = prod;
}

/*
forEach: The forEach() method in JavaScript is a built-in function primarily used to iterate over
         elements in arrays, but it can also be applied to Maps and Sets. It executes a provided callback function
         once for each element in the collection.
In-place mutation with forEach():
    forEach(callback) passes (element, index, array) -> position matters, names don't.
    This lets us modify the original array during iteration.
    Example: array[index] = some transformation of element;
CAUTION: This mutates the original array directly.
*/

function display(i) { // this will  be used in the upcoming examples
    console.log(i);
}

// 1
const games = ["Terraria", "Titanfall 2", "Dark Souls", "Blasphemous", "Minecraft", "Hollow Knight"];
// games.forEach(uc);
games.forEach(lc);
games.forEach(capitalize);
games.forEach(display); // using display function defined at the start of this section (forEach)

function uc(element, index, array) {
    array[index] = element.toUpperCase();
}
function lc(element, index, array) {
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array) { // capitalizes each word of element
    const words = element.split(" ");
    words.forEach(cp);
    function cp(e, i, a) {
        a[i] = e.charAt(0).toUpperCase() + e.slice(1);
    }
    array[index] = words.join(" ");
}
/*
Alternative capitalize implementations for reference
====================================================
Using map() instead of forEach() (most readable):
    function capitalize(element, index, array) {
        array[index] = element.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
Explanation for how `.map(word => ...)` works:
    In this context, `word` is just a variable name chosen by the programmer.
    It represents each element in the array returned by `split(" ")`.
    The JavaScript engine doesn't "know" that `word` means a word, it's not special.
    It could be named anything (`w`, `x`, `skibidi`) and the code would still work the same.
    This code:
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    ...takes each string in the array,
    capitalizes the first letter,
    and appends the rest of the string after it.
*/

// 2
const nums = [1, 8, 9, 7, 6, 5, 4, 0, 3, 2];
nums.forEach(double);
nums.forEach(display); // using display function defined at the start of this section (forEach)

// function double(num) { // does not modify the original array
//     num = num*2;
//     console.log(num);
// }

function double(el, idx, arr) { // modifies the original array nums in place
    arr[idx] = el * 2;
}

/* map() method:
    It is used to iterate over each element in an array and create a new array
    by applying a provided callback function to each element.
    The original array remains unchanged. */
// 1
const numbers = [2, 8, 15, 82, 108];
function squareNumber(num) {
    return Math.pow(num, 2);
}
const squares = numbers.map(squareNumber);
console.log(squares);

// 2
const yyyymmdd = ["2025-07-12", "2025-08-28", "2025-12-23"];
function dateFormatter(date) {
    const partsOfDate = date.split("-");
    return `${partsOfDate[2]}.${partsOfDate[1]}.${partsOfDate[0]}`;
}
const ddmmyyyy = yyyymmdd.map(dateFormatter);
console.log(yyyymmdd);
console.log(ddmmyyyy);

/* filter() method:
    It creates a new array containing only the elements from the
    original array that satisfy a specified condition.
    It does not modify the original array. */

const ages = [15, 12, 14, 18, 19, 21, 20, 26, 29, 30, 45, 60];
function isAdult(age) {
    return age >= 18;
}
const adults = ages.filter(isAdult);
console.log(adults);

/* reduce() method: (it basically reduces the elements of an array to a single value)
    It is a higher-order array method that executes a provided "reducer"
    callback function on each element of the array, resulting in a single output value.
    It is used to accumulate or reduce the elements of an array to a single value.
Parameters:
- callback (required):
- A function that is executed on each element of the array. It takes the following arguments:
    - accumulator: The accumulated value returned from the previous iteration of the callback.
      In the first iteration, if initialValue is provided, it will be the initialValue;
      otherwise, it will be the first element of the array.
    - currentValue: The current element being processed in the array.
    - index (optional): The index of the currentValue in the array.
    - array (optional): The original array on which reduce() was called. */

// 1
const groceryItemsCost = [20, 78, 49, 566, 89, 108];
function totalCost(accumulator, current) {
    return accumulator + current;
}
const totalGroceryCost = groceryItemsCost.reduce(totalCost);
console.log(totalGroceryCost);

// 2
const agesOfSomePeople = [18, 20, 39, 22, 21, 45, 50, 30, 80, 62, 95];
const maximumAge = agesOfSomePeople.reduce(getMaxAge);
const minimumAge = agesOfSomePeople.reduce(getMinAge);
function getMaxAge(previousAge, currentAge) {
    return Math.max(previousAge, currentAge);
}
function getMinAge(previousAge, currentAge) {
    return Math.min(previousAge, currentAge);
}
console.log(maximumAge);
console.log(minimumAge);

/* Function Expressions: (basically a way to define functions as values or variables; not to be confused with function declarations)
    In JavaScript, a function expression defines a function within an expression,
    typically by assigning it to a variable. This contrasts with a function declaration,
    which defines a named function as a standalone statement. */

// 1

const helloWorld = function () {
    console.log("Hello World");
}

helloWorld();

// 2

/* The setTimeout() method in JavaScript allows for the delayed execution of a function or
   the evaluation of a code string after a specified duration. It is a fundamental part of
   asynchronous programming in JavaScript, enabling tasks to be scheduled without blocking
   the main execution thread.

const timeoutID = setTimeout(functionToExecute, delayInMilliseconds, param1, param2, ...); */

// setTimeout(function() {
//     console.log("HEY")
// }, 2000);

// 3

/* Considering this example from map():
const numbers = [2, 8, 15, 82, 108];
function squareNumber(num) {
    return Math.pow(num, 2);
}
const squares = numbers.map(squareNumber);
console.log(squares); 

Using a function expression the same thing can be done this way: */
const numbers1 = [21, 82, 153, 821, 148]; // changed the numbers for no reason
const squares1 = numbers1.map(function (num) {
    return Math.pow(num, 2);
});
console.log(squares1);

// 4

/* Similarly, this code:
const ages = [15, 12, 14, 18, 19, 21, 20, 26, 29, 30, 45, 60];
function isAdult(age) {
    return age>=18;
}
const adults = ages.filter(isAdult);
console.log(adults);

...can be written like this using function expressions: */
const ages1 = [15, 12, 14, 18, 19, 21, 20, 26, 29, 30, 45, 60];
const adults1 = ages1.filter(function (age) {
    return age >= 18;
});
console.log(adults1);

/* Function expressions are also used in:
    1. Callbacks in asynchronous operations
    2. Higher-Order Functions
    3. Closures
    4. Event Listeners */

/* Arrow Functions: (concise way to write function expressions)
    Arrow functions, introduced in ES6 (ECMAScript 2015), provide a concise syntax for
    writing function expressions in JavaScript.
    They offer a shorter alternative to traditional function expressions and have
    distinct behaviors regarding this binding. 
    These are good for simple, one-time-use functions.
    (parameters) => code */

// 1

/*
const helloWorld = function() {
    console.log("Hello World");
}
This code can be written using arrow functions like: */

const helloWorld1 = () => { console.log("Hello World"); }
helloWorld1();

// 2

/*
const ages1 = [15, 12, 14, 18, 19, 21, 20, 26, 29, 30, 45, 60];
const adults1 = ages1.filter(function(age) {
    return age>=18;
});
console.log(adults1);
This code can be written using arrow functions like: */

const ages2 = [15, 12, 14, 18, 19, 21, 20, 26, 29, 30, 45, 60];
const adults2 = ages2.filter((age) => {
    return age >= 18;
});
console.log(adults2);

// 3
const helloNameAge = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old.`);
};
helloNameAge("Sapto", 21);

// 4
/*
setTimeout(function() {
    console.log("HEY")
}, 2000);
This can be written like: */
// setTimeout(()=>{console.log("HEY")}, 2000);

// 5
const numbers2 = [1, 2, 3, 4, 5, 6];
const squares2 = numbers2.map((element) => Math.pow(element, 2));
const evenNums = numbers2.filter((element) => element % 2 === 0);
const total = numbers2.reduce((accumulator, element) => accumulator + element);
console.log(total);

/* Objects:
    In JavaScript, an object is a non-primitive data type used to store collections
    of related data and more complex entities. Unlike primitive data types
    (like numbers, strings, booleans, null, undefined, and symbols) which hold a single value,
    objects can store multiple values as key-value pairs.
    object = {key:value, function()} */

const person = {
    firstName: "Saptaparno",
    lastName: "Chakraborty",
    age: 21,
    // greet: function(){console.log(`Hello, I'm ${this.firstName} and I'm ${this.age} years old.`)},
    // work: function(){console.log("I'm working.")}
    greet() { console.log(`Hello, I'm ${this.firstName} and I'm ${this.age} years old.`); }, // if `this` is involved then arrow functions don't work
    work: () => { console.log("I'm working."); } // if `this` isn't involved then arrow functions WORK
}
console.log(person.firstName);
person.greet();
person.work();

/* `this` keyword:
    In JavaScript, the `this` keyword refers to the object that is executing the
    current code or the object that owns the function being called.
    Its value is determined at runtime, depending on the context in which
    the function is invoked. */

const food1 = {
    nayme: "fried pomfret",
    price: "₹550",
    details() { console.log(`This ${this.nayme} costs ${this.price}.`) }
}
const food2 = {
    nayme: "mishti doi",
    price: "₹400",
    details() { console.log(`This ${this.nayme} costs ${this.price}.`) }
}
food1.details();
food2.details();

/* Constructor Functions: (not to be confused with class constructors)
    In JavaScript, a constructor is a special function or method
    used to create and initialize objects. It acts as a blueprint for
    creating multiple instances of a similar type of object, defining
    the properties and behaviors that each new object will possess. */

function VideoGame(name, genre, yearOfRelease, rating) {
    this.name = name,
        this.genre = genre,
        this.yearOfRelease = yearOfRelease,
        this.rating = rating,
        this.play = function () { console.log(`Playing a game of genre: ${this.genre}`) }
}

const game1 = new VideoGame("Terraria", "Action-Adventure", 2011, "10/10");
const game2 = new VideoGame("Dark Souls", "Soulsborne", 2011, "10/10");
const game3 = new VideoGame("The Witcher 3", "Action RPG", 2015, "10/10");

game1.play();
game2.play();
game3.play();

console.log(game1.name);
console.log(game1.genre);
console.log(game1.yearOfRelease);
console.log(game1.rating);

console.log(game2.name);
console.log(game2.genre);
console.log(game2.yearOfRelease);
console.log(game2.rating);

console.log(game3.name);
console.log(game3.genre);
console.log(game3.yearOfRelease);
console.log(game3.rating);

/*  */

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