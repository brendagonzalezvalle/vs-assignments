// <!-- FizzBuzz is the must know coding challenge. 

// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// ### **Example:**

// 12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16ect. -->

const numbers = []

for (let i = 0; i <= 100; i++) {
    console.log(i)
    if(i % 3 === 0){
        console.log("Fizz")
    }
    if (i === 5){
        console.log("Buzz")
    }
    if (i === 3 && i === 5){
        console.log(FizzBuzz)
    }

}
