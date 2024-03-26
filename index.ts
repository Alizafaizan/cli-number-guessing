#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a random number.

// 2) user input for gussing number.

// 3) compare user input with computer generated number.

const randomNumber = Math.floor(Math.random() * 6 + 1) ;

const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-6",
  },
]);

if(answers.userGuessNumber === randomNumber){
console.log("Congractulations! you guessed right number.");
}else {
    console.log("You guessed wrong number.");
}
