const readlineSync = require("readline-sync")
const intro = readlineSync.question("Hi Welcome! Let's play a game today!! Wohooo!");
console.log(intro)

const userName = readlineSync.question("What is your name? ");
console.log("Great thank you " + userName + "!")


let randomNumber = Math.floor(Math.random()*10)
// let userWalk = readlineSync.keyIn("Enter a (w) to walk through the tunnel?")
let enemy = 0

while (enemy < 3 ){
    enemy++
//    console.log(randomNumber)
   console.log("Keep going you are getting closer to the end of the tunnel!")
   let userWalk = readlineSync.keyIn("Enter a (w) to walk through the tunnel?")
    
    continue
    
}

