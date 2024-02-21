const countershow = document.getElementById("countershow")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const reset = document.getElementById("reset")
const btn = document.getElementById("btn")

let count = 0
plus.addEventListener("click", (e) => {


    count++
    updatevalue()
})

minus.addEventListener("click", (e) => {


    count--
    updatevalue()
})

reset.addEventListener("click", (e) => {
    count = 0
    updatevalue()
    sessionStorage.removeItem("Point")
})


function updatevalue() {
    countershow.innerHTML = count
    countershow.style.color = "green"

}

updatevalue()



function storevalue() {
    btn.addEventListener("click", (e) => {
        sessionStorage.setItem("Point", `${count}`)
    })
}

storevalue()