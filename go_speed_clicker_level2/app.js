let count = 0

const clickMeButton = document.getElementById("button")
// console.log(clickMeButton)

const totalClicked = document.getElementById("counter")
localStorage.setItem("number", totalClicked)

const myFunc = function (){
   

}
document.addEventListener("onclick", myFunc )

clickMeButton.onclick = function (){
   count ++;
   totalClicked.innerHTML = count;
}





// const numberCount = function clicker (){
// console.log("clicked")
// }




// document.addEventListener("click", numberCount); {
//    const header = document.createElement("h4")
//    header.textContent.value = ""
//    document.getElementById("counter").append(header)
   
   //  
// }

// setTimeout(function(){
//     console.log("It's working");
// }, 1000);