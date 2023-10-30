
'use strict';

console.log("Hello")

//1.

alert("Hello! This website is about me. Glad you stopped by. Here's some trivia. Let's see how you do.");
alert("Answer the following questions with Yes or No.");

let userScore = 0

function askQuestion(question, rightMessage, nopeMessage) {
    const userAnswer = prompt(question).toLowerCase();
    if (userAnswer === "") {
      alert("Please enter Yes or No.");
    } else if (userAnswer === rightMessage) {
        alert("That's correct!");
        userScore++;
    } else {
        alert(nopeMessage);
    }
}
// How do I make it stop user if user doesn't give an answer
askQuestion("Do I work with startups?", "yes", "Nope.");
askQuestion("Do I live in Nebraska?", "no", "Whoops, wrong answer. I used to though.");
askQuestion("Do I have kids?", "yes", "Shoot. Actually, I have two teenage sons.");
askQuestion("Am I in a Code Fellows course?", "yes", "Nope, actually I am.");
askQuestion("Do I want to learn cyber security at CF?", "no", "Close, but I'm learning software development, not cyber security.");


alert(`You've gotten ${userScore} questions right so far.`);

//2.

const numCountriesCoachedIn = 22;

for (let i = 1; i < 5; i++ ){
  let userGuess = prompt("Guess how many different countries I've coached entrepreneurs from.");
    if (userAnswer === " ") {
      alert("Please enter a number.");
    }
  userGuess = Number(userGuess);
    if( userGuess === numCountriesCoachedIn ) {
      alert("That's right! You got it.");
      userScore++;
      break;
    }
    else if (userGuess > 22){
      alert("Your guess is too high.");
    }
   else if (userGuess < 22){
      alert("Your guess is too low.");
    }
}

alert(`You've gotten ${userScore} questions right.`);

//3.

const top10countries = ["Germany", "Ireland", "Barbados", "South Africa", "France", "Vietnam", "Scotland", "Turkey", "Jordan", "Spain"];

for (let i = 0; i < 6; i++) {
  let userAnswer = prompt("Guess one of my Top 10 favorite countries that I've traveled to and worked in.")
// Need help starting here.
     if (userAnswer = top10countries[]);{
       alert("That's correct!");
       userScore++
      break;
  }
    else (userAnswer !== top10countries{

    }
}

alert("All ten are Germany, Ireland, Barbados, South Africa, France, Vietnam, Scotland, Turkey, Jordan and Spain.");
alert("Thanks for playing 'About me' trivia! Your score is " + userScore + ".")
// alert(`You've gotten ${userScore} questions right.`);

const userName = prompt("That's it for the trivia on me. Now, what's your name?");
alert("Welcome to my site, " + userName + ".");
document.write("All that hard work on the prompts paid off, " + userName + ". Here is my About Me page.");
