//

// 6. Write the command that gives the indexOf where "Mary"
// is located.
// 7. Write the command that gives the indexOf where "Foo" is
// located. What is returning? Why?
// 8. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from the array and add

// let people = ["Greg", "Mary", "Devon", "James"];

// // 1. Write the command to remove "Greg" from the array.
// const arrayWithoutGreg = people.filter(function (person) {
//   return person !== "Greg";
// });
// console.log(arrayWithoutGreg);

// // 2. Write the command to remove "James" from the array.

// const arrayWithoutJames = people.filter(function (person) {
//   return person !== "James";
// });
// console.log(arrayWithoutJames);

// // 3. Write the command to add "Matt" to the front of the array.

// people.unshift("Matt");
// console.log(people);

// // 4. Write the command to add your name to the end of the
// // array.

// people.push("Nikolai");
// console.log(people);

// ["Matt", "Greg", "Mary", "Devon", "James", "Nikolai"];
// // 5. Write the command to make a copy of the array using a
// // slice. The copy should NOT include "Mary" or "Matt".

// let newArray = people
//   .slice()
//   .filter((name) => name !== "Matt" && name != "Mary");
// console.log(newArray);

// // 6. Write the command that gives the indexOf where "Mary"
// // is located.
// let peopleNew = ["Greg", "Mary", "Devon", "James"];
// console.log(peopleNew.indexOf("Mary"));

// // 7. Write the command that gives the indexOf where "Foo" is
// // located. What is returning? Why?

// let peopleNew = ["Greg", "Mary", "Devon", "James"];
// console.log(peopleNew.indexOf("Foo"));

//It returns -1 becuase this value doesn't appear in the array

// 8. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from the array and add "Elizabeth"
//and "Artie". Your array should look like this when you are
//done ["Greg", "Mary", "Elizabeth", "Artie","James"].

// let people = ["Greg", "Mary", "Devon", "James"];

// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// //9. Create a new variable called withBob and set it equal
// //to the people array concatenated with the string of "Bob"
// let withBob = people.concat("Bob");

// console.log(withBob);
