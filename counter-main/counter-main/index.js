let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("reset-btn")
let count = 0

if(count == 0){
    resetEl.style.display = "none"
} 

function increment() {
    count += 1
    countEl.textContent = count
    resetEl.style.display = "block"
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset(){
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous Series: "
    resetEl.style.display = "none"
}


