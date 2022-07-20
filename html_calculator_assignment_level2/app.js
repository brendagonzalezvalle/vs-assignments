// You are going to create a simple calculator that can Add, Subtract, and Multiply.

// **Requirements:**

// - You will have one section (`<div>`) for each math operation (so 3 sections) total
// - Each section has two inputs to take the first and second numbers
// - Each section will have a button to perform the operation
// - You will inject the result into the HTML (not an alert)
// - Your website will have 3 colors
// - Your website will have proper padding/spacing to lay things out nicely

const form1 = document["adding-form"]
const form2 = document["subtracting-form"]


// Form 1 adding

form1.addEventListener("submit", function(e){
    e.preventDefault()

    const firstNumberAdding = form1.addNum1.value
    const secondNumberAdding = form1.addNum2.value
    
    form1.addNum1.value = " "
    form1.addNum2.value = " "
    
    console.log(firstNumberAdding)
    console.log(secondNumberAdding)
    
    const h1 = document.createElement("h1")
    h1.textContent = firstNumberAdding + " " + secondNumberAdding
    document.getElementById("section1").append(h1)


})

// Form 2 subtracting

form2.addEventListener("submit", function(e){
    e.preventDefault()

    const firstNumberSubtracting = form2.subNum1.value
    const secondNumberSubtracting = form2.subNum2.value

    form2.subNum1.value = " "
    form2.subNum2.value = " "

    console.log(firstNumberSubtracting)
    console.log(secondNumberSubtracting)

    const h2 = document.createElement("h2")
    h2.textContent = firstNumberSubtracting + " " + secondNumberSubtracting
    document.getElementById("section2").append(h2)



})
