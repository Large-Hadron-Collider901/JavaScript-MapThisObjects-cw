// 2. Use ```.filter``` to create an array of pet objects that only holds the hamsters.

let pets = [
  {
    name: "Spot",
    type: "Hamster",
  },
  {
    name: "Harry",
    type: "Hamster",
  },
  {
    name: "Kitty",
    type: "Cat",
  },
];

let hamsters = []; // new array to hold objects

hamsters = pets.filter((pet) => {
  return pet.type === "Hamster";
});

console.log(hamsters);
