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

// ********************************************************** walk calls
// fight , then fight calls enemy encouter, enemy encounter calls , enemy attack
// function safe(){
//    readline.keyInPause("You are safe great job")
// }
// safe()

// function fight(){

// }

// *****Creating functions********************************************
 

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min)
} 

function walk(){
    let progress = 0
    let key = readlineSync.keyIn("To start walking press(w)? If you would like to print your stats, press (p). ") // Hanging
    console.clear()
    if (key === 'w') {
        let chance = randomNumber(1, 4)
        if (chance === 1) {

            if (attackOrRun !== 'r' || attackOrRun !== 'a') {
                console.log('you must press either r or a')
            }
            if (attackOrRun === 'r') run()
            else if (attackOrRun === 'a') attack()
        }
    }

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
} 

function run() {
    let escape = randomNumber(0, 2) // sleight of hand
    if (escape) return walk() // recurse (return to the top of a function, basically)
    else if (!escape) attack()
    console.log(readlineSync.keyInPause("The enemy is running"))
}    

function attack() {
    let index = randomNumber(0, 3)
    console.log(`You are being attacked by: ${enemies[index].name}`)

    readlineSync.keyInPause("The player is attacking first") // blocking/hanging

    let enemyDamage = randomNumber(1, 51)
    enemies[index].hp -= enemyDamage

    console.log(`the enemy health went down by ${enemyDamage}`)
    
    if (enemies[index].hp > 1) {
        console.log('but the enemy is still alive, so you did not win any loot!!')
    }

    if (enemies[index].hp < 0) {
        player.inventory.push(enemies[index].loot)
    }

    readlineSync.keyInPause("The enemy is attacking now") // blocking/hanging


    let playerDamage = randomNumber(1, 101)
    console.log(`player health has gone down by ${playerDamage}`)
    player.hp -= playerDamage

    if (player.hp > 0) {
        console.log('You are still alive! Keep walking, soldier!')
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










