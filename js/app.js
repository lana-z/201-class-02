
'use strict';
 // EKOW'S COMMENT

console.log("Hello")

//1. 

alert("Hello! This website is about me. Glad you stopped by. Here's some trivia. Let's see how you do.");

//let workSE = userAccept.substring(0, 1).toLowerCase();
//same as let workSE = workSE.charAt(0);
//also can use str.startsWith() method https://www.geeksforgeeks.org/javascript-string-startswith-method/


let userScore = 0;
let workSE = prompt("Do I work with startups?").toLowerCase();


if (workSE === "yes") {
   //console.log(That's correct!);
    alert("That's correct!");
    userScore++;
//} else if (userAnswer === "") {
  //  alert("Please enter an answer.");
} else {
    //console.log("Nope.");
    alert("Nope.");
}

function 

let liveNe = prompt("Do I live in Nebraska?").toLowerCase();

if (liveNe === "no") {
        //console.log("That's correct!");
    alert("That's correct!");
    userScore++;
//} else if (userAnswer === "") {
  //  alert("Please enter an answer.");
} else {
    //console.log("Whoops, wrong answer. I used to though.);
    alert("Whoops, wrong answer. I used to though!");
}

let iHaveKids = prompt("Do I have kids?").toLowerCase();

if (iHaveKids === "yes") {
    //console.log("That's correct!");
    alert("That's correct!");
    userScore++;
//} else if (userAnswer === "") {
  //  alert("Please enter an answer.");
} else {
    //console.log("Shoot. Actually I have two teengage sons.");
    alert("Shoot. Actually I have two teenage sons.");
}

let inCF = prompt ("Am I in a Code Fellows course?").toLowerCase();

if (inCF === "yes") {
    //console.log("That's correct!")
    alert("That's correct!");
    userScore++;
//} else if (userAnswer === "") {
  //  alert("Please enter an answer.");
} else {
    //console.log("Nope, actually I am.")
    alert("Nope, actually I am.");
}

let learnCybSec = prompt("Do I want to learn cyber security at CF?").toLowerCase();

if (learnCybSec === "no") {
    //console.log("That's correct!")
    alert("That's correct!");
    userScore++;
//} else if (userAnswer === "") {
  //  alert("Please enter an answer.");
} else {
    //console.log("Close, but I'm learning software development, not cyber security.")
    alert("Close, but I'm learning software development, not cyber security.");
}



//Lab Class 03


let numCountries = 22; 
let numGuesses = 4;


/*

let userGuess = prompt("Finally, guess how many different countries I've coached entrepreneurs from.").Number(userGuess);

if (userGuess === numCountries) {
    
    alert("That's correct!")
  }  else {
        alert("Nope.")
}
*/

for (let i = 1; i <= numGuesses; i++) {
    let userGuessNum = prompt("Guess how many different countries I've coached entrepreneurs from.")
    userGuessNum = Number(userGuessNum);
    
        if (userGuessNum === numCountries) {
        alert("That's correct!");
        userScore++;
        break;
//    } else if (userAnswer === "") {
  //      alert("Please enter an answer.");

    } else {
        alert("Nope.");
    }
}


let favC = ["Germany", "Ireland", "Barbados", "South Africa", "France", "Vietnam", "Scotland", "Turkey", "Jordan", "Spain"];
let numGuessesFavC = 6;
let guess = false;



for (let i = 1; i <= numGuessesFavC; i++){
    let userGuessFavC = prompt("Guess one of my Top 10 favorite countries that I've traveled to and worked in.").normalize()

//chatGPT help here - didn't figure out how not to use .includes
    if (favC.includes(userGuessFavC)) {
            alert("Yes, you got one of them! All ten are Germany, Ireland, Barbados, South Africa, France, Vietnam, Scotland, Turkey, Jordan and Spain.");
            guess = true;
            userScore++;
            alert("Thanks for playing 'About me' trivia! Your score is " + userScore + ".")
            break;
//    }   else if (userAnswer === "") {
  //          alert("Please enter an answer.");
    }   else {
            alert("No, that's not one of them.")
    }

}

    if (!guess) {
        alert("Thanks for playing, but you're now out of guesses. All ten are Germany, Ireland, Barbados, South Africa, France, Vietnam, Scotland, Turkey, Jordan and Spain.")
        alert("Thanks for playing 'About me' trivia! Your score is " + userScore + ".")
    }


    
/*
for (let i = 0; i <= numGuessesFavC.length; i++){
    alert("All ten are Germany, Ireland, Barbados, South Africa, France, Vietnam, Scotland, Turkey, Jordan and Spain.")
}
*/


//2.
const userName = prompt("Great. That's it for the trivia on me. Now, what's your name?");
alert("Welcome to my site, " + userName + ".");
document.write("All that hard work on the prompts paid off, " + userName + ". Here is my About Me page.");

