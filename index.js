let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment_count() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log("saving...")
    let savedText = count + " - "
    saveEl.textContent += savedText
    count = 0
    countEl.textContent = "0"
}

let num1 = 8
let num2 = 2

function add() {
    console.log(num1 + num2)
}

function subtract() {
    console.log(num1 - num2)
}

function divide() {
    console.log(num1 / num2)
}

function multiply() {
    console.log(num1 * num2)
}

add()
subtract()
divide()
multiply()
