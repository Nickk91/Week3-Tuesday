// Returns a random integer from 0 to 99:
// Math.floor(Math.random() * 100);

let randomNum = Math.floor(Math.random() * 50 + 1);
console.log(randomNum);

let userGuess = Number(prompt("'Guess a number between 1 and 50"));

while (userGuess !== randomNum) {
  if (userGuess > randomNum) {
    userGuess=Number(prompt("Too high. Guess lower"));}
  else  (userGuess < randomNum) {
    userGuess= Number(prompt("Too low. Guess higher"));}}

    userGuess = Number(prompt(`The number is ${userGuess} You win!`));


  
  

