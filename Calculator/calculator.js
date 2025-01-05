let calculation = "";
let paragraphElem = document.querySelector(".results p");

function displayCalculation(number) {
    if (number === "clear") {
        calculation = "";
        paragraphElem.innerText = calculation;
        return
    } else if (number === "=") {
        calculation = eval(calculation);
        paragraphElem.innerText = calculation;
        return
    }
    calculation += number;
    paragraphElem.innerText = calculation;
}