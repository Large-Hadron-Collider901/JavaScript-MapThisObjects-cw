// #### Exercise 4:
// Use `map` to take an array of words in lower-case and returns an array of the strings where *every other word* is in all caps. Then use `foreach` to print out the new array.

// ex:
// `hey pal, lets javascript together sometime` // => "HEY pal, LETS javascript TOGETHER sometime"

// Create my string
let myString =
  "We're sorry, we're currently experiencing high call volume, all of our agents are currently busy. Please hang up and try your call again later. Thank you.";
let stringToArray = myString.split(" "); // split up my string by each word, creating an array of words
let setEveryOtherWordtoCaps = stringToArray.map((el, idx) => {
  for (let idx = 1; idx < stringToArray.length; idx += 2) {
    // for every other word in array, set to uppercase
    stringToArray[idx] = stringToArray[idx].toUpperCase();
  }
  // join the array with spaces
  const result = stringToArray.join(" ");
  console.log(result);
  return result;
});
