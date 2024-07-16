// day 1

// important lesson (Uppercase constants)
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
let name = "John";

// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

// day 2
// JavaScript is a synchronous single-threaded language therefore it excecutes one code at a time

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

// js parses through the file line by line first assigning undefined as it is in the memory.
// then again assigns the values in the code. as soon as this is done we get the number 2 in 'n'.
// which is then assigned to num in the code block. Thereby returns answer as 4
// the (num) is the parametrer
// square(n/4) is the arguement which is used to replace (num) in the params

// DAY 3
// Hoisting is the ability to access variables even before initializing it.
// for example

getName();
console.log(x);

var x = 7;
function getName() {
  console.log("Hello coder");
}

// explanation; Get name will display the value {"hello coder"}
// but "console.log(x)" will be undefined.
// arrow functions behave as normal variables, therefore an error will be thrown.
// example
var getName2 = () => {
  console.log("getName2");
};

// this will throw an error, as arrow function will be treated as a normal
// variable.

// How functions work in js
// example
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}
// EXPLANATION;
// A global execution context is created(2 components), the memory and code context


