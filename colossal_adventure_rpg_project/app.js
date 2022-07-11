// Tips focus on: 1. write functions for actions that happen, 2 life span the players health points. "Enemy array variable array of objects"


let defeated = false
let hp = 100
enemies = [ ]



// Keep this line of code:  Intro/ stores name

const readlineSync = require("readline-sync")
const intro = readlineSync.question("Hi Welcome! Let's play a game today!! Wohooo!");
console.log(intro)

const userName = readlineSync.question("What is your name? ")

console.log("Great thank you " + userName + "!")



while(hp > 0){
    walk()
    }

// ********************************************************** walk calls
// fight , then fight calls enemy encouter, enemy encounter calls , enemy attack
// function safe(){
//    readline.keyInPause("You are safe great job")
// }
// safe()

// function fight(){

// }

function walk(){
    const walking =readlineSync.keyIn("To start walking press(w)?")
    let chance = Math.floor((Math.random()*2)+1);
    console.log(chance)

        if(chance === 1){
            console.log("1")
        } else console.log("2")
        } 
        readlineSync.keyInPause("Oh no get ready to begin fighting ")
    let willFight = readlineSync.keyIn("(f) for fighting, (i) for checking inventory")
    
    
    // console.log("Moving");
    // let userChoice = readlineSync.keyIn("Would you like to attack or run? Type (a) to attack or type (r) to run") 
    
    
// } 



//     switch(chance){
//         case 1:
//             encounter() 
//         break;
//         default:
//             safe() 
//         break; 
    


   
// } safe - safe place 
// encounter - enemies
