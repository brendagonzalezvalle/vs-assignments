// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// largest([3, 5, 2, 8, 1]) // => 8

// 1. Brenda's code for #1
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

