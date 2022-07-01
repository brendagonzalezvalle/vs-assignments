// Tips focus on: 1. write functions for actions that happen, 2 life span the players health points. "Enemy array variable array of objects"







const readlineSync = require("readline-sync")
const intro = readlineSync.question("Hi Welcome! Let's play a game today!! Wohooo!");
console.log(intro)

const userName = readlineSync.question("What is your name? ")

console.log("Great thank you " + userName + "!")


function walk(){
    let chance = Math.floor((Math.random()*2)+1);
   
    console.log("Moving");
    let userChoice = readlineSync.keyIn("Would you like to attack or run? Type (a) to attack or type (r) to run") 

    switch(chance){
        case 1:
            encounter() 
        break;
        default:
            safe() 
        break; 
    


    // while (randomNumber < 0.25){
    //     console.log("It's working") 
    //     if (randomNumber < .025 || randomNumber > .400 ){
    //         let userChoice
    //     }
    //     else if (randomNumber ){
    //         console.log("We got past it")
    //     }        
    //     break;
    // } safe - safe place 
    // encounter - enemies
}

walk()
