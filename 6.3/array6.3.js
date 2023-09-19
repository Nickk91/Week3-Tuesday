// 1. create an array with at least 5 strings, in different lengths.
// 2. Go over each string in the array and store the length of this string in a
// new array.
// 3. Console.log the new array of string lengths.
// For example: ["boo", "doooo", "hoo","ro"] will log this array: [3, 5, 3, 2].

let people = ["Gregory", "Mary", "Devon", "Jamesson", "Sholomonny"];
let newPeople = [];

for (let i = 0; i < 5; i++) {
  newPeople.push(people[i].length);
}
console.log(newPeople);
