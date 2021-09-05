// Exercise 1:
// 1. Use .map to create a new array of objects where each object has a property for ```petnumber``` and ```pettype``` based on the elements in the array. Print the new array of objects.

let petTypes = ["dog", "cat", "pig", "hamster"];
let pet_objects = [];

pet_objects = petTypes.map((el, idx) => {
  return {
    petNum: idx,
    petType: el,
  };
});

console.log(pet_objects);
