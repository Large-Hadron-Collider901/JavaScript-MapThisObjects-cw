// #### Exercise 3:

// Write a function that takes a string and returns total character count of letters for all strings in the sentence.

// Use ```.reduce``` return this count.  Hint: See ```.split()``` and string ```length``` property.

// create string
let myString = "As a man thinketh in his heart, so shall be";
let spaceCount = myString.split(" ").length - 1; // count number of spaces in the string
//console.log(spaceCount); // debugger
// create string
let newStringArr = myString.split("");
// reduce newString to a single value
let charCount = newStringArr.reduce(
  // store the value in a variable
  (el) => {
    return newStringArr.length - spaceCount;
  }
);
console.log(charCount);
