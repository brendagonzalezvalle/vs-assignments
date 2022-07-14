// Tips focus on: 1. write functions for actions that happen, 2 life span the players health points. "Enemy array variable array of objects"


let defeated = false
let hp = 100
let enemies = [ 
    {
        name: "Enemy 1",
        hp: "30",
        attack: "10"


    },
    {
        name: "Enemy 2",
        hp: "50",
        attack: "20",

    },
    {
        name: "Enemy 3",
        hp: "20",
        attack: "80"
    },


]



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

// *****Creating functions********************************************
 

function walk(){
    let walking =readlineSync.keyIn("To start walking press(w)?")
    let chance = Math.floor((Math.random()*3)+1);
    console.log(chance)

        if(chance === 1){
            let attackOrRun =readlineSync.keyIn("You have encounter with Enemy 1. Would you like to attack (a) or run (r)?")
            console.log(enemies[0])


        } else if (chance === 2){
            console.log(enemies[1])
        } else if (chance === 3){
            console.log(enemies[2])
        } else console.log("game ends")   
  
        // let willFight = readlineSync.keyIn("(f) for fighting, (i) for checking inventory")
        
        
    } 
function fight(){
    readlineSync.keyInPause("The enemy is fighting")

}    
    
    














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
