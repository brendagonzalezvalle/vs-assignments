var form = document["airlineForm"]
var submit = document.querySelector("#submit");
// var query = document.querySelector;
console.log(form)
function formAlert() {
    let firstName = form.elements["firstName"].value;
    let lastName = form.elements["lastName"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    let diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


form.addEventListener("submit", function(e){
    e.preventDefault()
    formAlert()
})