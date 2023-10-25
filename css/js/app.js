
'use strict';

console.log("Hello")

//1. 

alert("Hello! This website is about me. Glad you stopped by. Here's some trivia about me. Let's see how you do.");

let workTJ = prompt("Do I work at Trader Joe's?");
workTJ = workTJ.toLowerCase();

if (workTJ === "no") {
   //console.log(That's correct!);
    alert("That's correct!");
} else {
    //console.log("Nope.");
    alert("Nope.");
}

let liveNe = prompt("Do I live in Nebraska?");
liveNe = liveNe.toLowerCase();

if (liveNe === "no") {
        //console.log("That's correct!");
    alert("That's correct!");
} else {
    //console.log("Whoops, wrong answer. I used to though.);
    alert("Whoops, wrong answer. I used to though!");
}

let iHaveKids = prompt("Do I have kids?");
iHaveKids = iHaveKids.toLowerCase();

if (iHaveKids === "yes") {
    //console.log("That's correct!");
    alert("That's correct!");
} else {
    //console.log("Shoot. Actually I have two teengage sons.");
    alert("Shoot. Actually I have two teenage sons.");
}

let inCF = prompt ("Am I in a Code Fellows course?");
inCF = inCF.toLowerCase();

if (inCF === "yes") {
    //console.log("That's correct!")
    alert("That's correct!");
} else {
    //console.log("Nope, actually I am.")
    alert("Nope, actually I am.");
}

let learnCybSec = prompt("Do I want to learn cyber security at CF?")
learnCybSec = learnCybSec.toLowerCase();

if (learnCybSec === "no") {
    //console.log("That's correct!")
    alert("That's correct!");
} else {
    //console.log("Close, but I'm learning software development, not cyber security.")
    alert("Close, but I'm learning software development, not cyber security.");
}




//2.
const userName = prompt("Great. That's it for the trivia on me. Now, what's your name?");
alert("Welcome to my site, " + userName + ".");
document.write("All that hard work on the prompts paid off, " + userName + ". Here my About Me page.");
