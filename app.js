// import functions and grab DOM elements
import { renderString, renderShoe } from "./utils.js";
import { stringArray } from "./string-data.js";
import { shoesArray } from "./shoes-data.js";

const stringList = document.getElementById('stringsList');
const shoeObjects = document.getElementById('shoesArray')

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

for (let string of stringArray) {
    const li = renderString(string);
    stringList.append(li);
}

for (let shoe of shoesArray) {
    const div = renderShoe(shoe);
    shoeObjects.append(div);
}