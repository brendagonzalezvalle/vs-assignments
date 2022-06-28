// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// largest([3, 5, 2, 8, 1]) // => 8


function largestValue(numbers) {
    var largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        var elements = numbers[i];
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}
const numbers = [3, 5, 2, 8, 1];
console.log(largestValue(numbers));

// 2. Write a function that takes an array of words and a character and returns each word that has that character present.
// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 

// => ["C%4!", "Hey!"]

// 3.Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

// 3. Brenda's code for #3
// function isDivisible (num1, num2){
//     if(num1 % num2 == 0){
//         console.log("true")
//     }
//     else console.log(("false"))

// }
// isDivisible (4, 2)
// isDivisible(9, 3)
// isDivisible(15, 4)
// isDivisible(10, 5)