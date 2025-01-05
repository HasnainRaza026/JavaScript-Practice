function gaming() {
    let buttonElem = document.querySelector('.js-gaming')
    if (!buttonElem.classList.contains("gaming-active")) {
        buttonElem.classList.add("gaming-active")
    } else {
        buttonElem.classList.remove("gaming-active")
    }
}

function toggleSwitchs(elemClass) {
    let buttonElem = document.querySelector(elemClass)
    if (!buttonElem.classList.contains("gaming-active")) {
        buttonElem.classList.add("gaming-active")
    } else {
        buttonElem.classList.remove("gaming-active")
    }
}

function radioButtons(elemClass) {
    document.querySelector(".js-gaming3").classList.remove("gaming-active")
    document.querySelector(".js-music3").classList.remove("gaming-active")
    document.querySelector(".js-tech3").classList.remove("gaming-active")

    document.querySelector(elemClass).classList.add("gaming-active")
}

function calculateAction() {
    let inputElem = document.querySelector("input")
    if (Number(inputElem.value) < 0) {
        document.querySelector(".js-result").innerText = "Error: cost cannot be less than $0"
    }
    else {
        document.querySelector(".js-result").innerText = ""
    }
}