// import functions and grab DOM elements
import { renderString } from "./utils.js";
import { stringArray } from "./string-data.js";

const stringList = document.getElementById('stringsList');

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

for (let string of stringArray) {
    const li = renderString(string);
    stringList.append(li);
}