// Tips focus on: 1. write functions for actions that happen, 2 life span the players health points. "Enemy array variable array of objects"



let player = {
    defeated: false,
    hp: 100, 
    inventory: []
}

let enemies = [ 
    {
        name: "Enemy 1",
        hp: "30",
        attack: "10", 
        loot: 'apple'
    },
    {
        name: "Enemy 2",
        hp: "50",
        attack: "20",
        loot: 'gold'
    },
    {
        name: "Enemy 3",
        hp: "20",
        attack: "80",
        loot: 'candy'
    },


]



// Keep this line of code:  Intro/ stores name

const readlineSync = require("readline-sync")
const intro = readlineSync.question("Hi Welcome! Let's play a game today!! Wohooo!");
console.log(intro)

const userName = readlineSync.question("What is your name? ")

console.log("Great thank you " + userName + "!")

while (true) {
    walk()
}

// *****Creating functions********************************************
 

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min)
} 

function walk(){
    let progress = 0
    let key = readlineSync.keyIn("To start walking press(w)! If you would like to print your stats, press (p). ") // Hanging
    console.clear()
    if (key === 'p') {
        console.log('Here are your stats: ')
        console.log(`Your health is ${player.hp}`)

        console.log('and here are your inventory items: ')
        if (!player.inventory.length) {
            console.log('There is nothing in your inventory')
        } else {
            player.inventory.forEach((item) => {
                console.log(item)
            })
        }
    }   
    if (key === 'w') {
        let chance = randomNumber(1, 4)
        if (chance === 1) {
            playersChoice =readlineSync.keyIn("You are being attacked would you like to run (r) or attack (a)?")
            if(playersChoice === "a"){
                attack()
            } else if (playersChoice === "r" ){
                run()
                

            } else if (playersChoice !== "a" || "r"){
                console.log("You must press the key (a) or (r)")
                walk()
            }
        } else if (chance === 3){
            readlineSync.keyInPause("You are doing great keep going !! chance 3 is happening")
        } else {
            console.log("chance 2 is happening")
        }

    }
}



function run() {
    let escape = randomNumber(0, 2) // sleight of hand
    if (escape === 0) return escape() // recurse (return to the top of a function, basically)
    else if (escape !== 0) {
        attack()
        readlineSync.keyInPause("The enemy is running")
}    }

function escape(){
    readlineSync.keyInPause("You have escaped!! Nice job you are a fast runner!")
}

function attack() {
    let index = randomNumber(0, 3)
    console.log(`You are being attacked by: ${enemies[index].name}`)

    readlineSync.keyInPause("You got ahead of the game and set a trap that hit the Enemy WAY TO GO!!") // blocking/hanging

    let enemyDamage = randomNumber(1, 51)
    enemies[index].hp -= enemyDamage

    readlineSync.keyInPause("")
    console.log(`the enemies health went down by ${enemyDamage}`)
    
    if (enemies[index].hp > 1) {
        readlineSync.keyInPause('but the enemy is still alive, so you did not win any rewards!!')
    }

    if (enemies[index].hp < 0) {
        player.inventory.push(enemies[index].loot)
    }

    // readlineSync.keyInPause("The enemy is attacking now") // blocking/hanging


    let playerDamage = randomNumber(1, 101)
    readlineSync.keyInPause(`Ouch the enemy has hit you back and your health points went down by  ${playerDamage}`)
    player.hp -= playerDamage

    if (player.hp > 0) {
        readlineSync.keyInPause('You are still alive! Keep walking, you got this!')
        walk()
    }

    if (player.hp < 0) endGame()
    else return walk()

    
}
    
function endGame() {
    console.log('you lost')
    process.exit(0)
}

function winGame() {
    console.log('you won')
    process.exit(0)
}


