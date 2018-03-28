/* global $ */
console.log("Hello World!");

const functions = require("./libraryfunctions.js")

functions.print("testing?");

functions.print("library being called");

console.log(functions.getDate());

console.log(functions.getSumProduct(1,2));

var raw = process.argv;//use to call out input from command line
var array = [];
raw.shift();
raw.shift();
for (var i = 0; i< raw.length; i++) {
    array.push(parseInt(raw[i]));
}

console.log(functions.sortArray(array));

console.log(functions.findMedian(array));

console.log(functions.findMode(array));