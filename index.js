//initalize the count as 0
// //listen for clicks on the increament button
// //increament the count variable when the button is clicked
// //change the count-el in the html to reflect this
// console.log("JS loaded")

// let count = 0
// function increment() {
//     console.log("The button was clicked")
//     count +=1 
//     console.log(count)
//     document.getElementById("count-el").innerText = count
// }


// // 1. Create a function, save(), which logs out the count when it's called
// function save(){
//     console.log(count)
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("reset-btn")
let saveEl = document.getElementById("save-el")
let count = 0
console.log(saveEl)
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
   let countString= count+" -  "
   saveEl.textContent+=  countString
   
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
function reset(){
    
    countEl.textContent=0
    saveEl.textContent=""
}


