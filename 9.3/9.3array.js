// You are given two arrays:
// const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber",
// "Olives"];
// const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
// write a program that loops over the arrays and checks if both of them
// have the same values or not.
// console.log true or false as the results. Tests it with same arrays, diff
// arrays, diff order etc.

const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const dupArray = [];

for (let i = 0; i < food1.length; i++) {
  for (let q = 0; q < food2.length; q++) {
    if (food1[i] === food2[q]) {
      dupArray.push(food1[i]);
    }
  }
}
console.log(dupArray);

for (let i = 0; i < food1.length; i++) {
  if (food2.includes(food1[i])) {
    console.log(true);
  } else {
    console.log(false);
  }
}
