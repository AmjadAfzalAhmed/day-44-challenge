/* According to ES6 Rules,in order to export and import a function from one javascript file to another we have to go through following process:

    i. As a first step we have to set the type to module in pacakge.json file, so that we could perform our task.
    ii. Then we create a function in a file from where we have to export it, "we will have to use export keywor before the function"
        proper definition could be understood by the example given below:
    iii. After creating a function an a separate file, we will have to create another fle where we have to import
         the function we created. Then we will write code such as " import {function name} from "path to file"  and use it."*/
//  First step setting the type to module in package.json:
"type";
"module";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeMessage = exports.greetings = exports.greet = void 0;
// Second step, creating and exporting a function in a file named expo.js:
// first style of exporting
function greet() {
    console.log("Welcome to my Code!");
}
exports.greet = greet;
// second style of exporting
function greetings() {
    console.log("I welcome you to my code");
}
exports.greetings = greetings;
exports.welcomeMessage = greetings;
// Third step, importing the pre-defined function to your new file impo.js
const expo_js_1 = require("./expo.js");
// You can even rename the imported function while importing it such as:
const expo_js_2 = require("./expo.js");
// all set to run your function
(0, expo_js_1.greet)();
(0, expo_js_2.greet)();
