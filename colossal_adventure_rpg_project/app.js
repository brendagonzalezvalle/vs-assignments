// Tips: 1. write functions for actions that happen, 2 life span the players health points. Enemy array variable



const readlineSync = require("readline-sync")
const intro = readlineSync.question("Hi Welcome! Let's play a game today!! Wohooo!");
console.log(intro)

const userName = readlineSync.question("What is your name? ")

console.log("Great thank you " + userName + "!")

const userChoice = readlineSync.keyIn("Would you like to attack or run? Type (a) to attack or type (r) to run") 


// let randomNumber = Math.floor(Math.random()*10)
// let userWalk = readlineSync.keyIn("Enter a (w) to walk through the tunnel?")
// let enemy = 0

const catEnemy = function (){
   return console.log("There is a cat coming to attack" + userChoice)
}

function walk(){
    let randomNumber = Math.random();
    console.log(randomNumber)
    console.log("Moving");
    
    while (randomNumber < 5){
        catEnemy();
      console.log("It's working")              
        break;
    }
}

walk()

// while (enemy < 3 ){
//     enemy++
//    console.log(randomNumber)
//    console.log("Keep going you are getting closer to the end of the tunnel!")
//    let userWalk = readlineSync.keyIn("Enter a (w) to walk through the tunnel?") 
    // / }