const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");

const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const dotBtn = document.querySelector(".dot");
const percentBtn = document.querySelector(".percent");


const calculatorScreen = document.querySelector(".result");

function add() {
    return parseInt(currentNumber) + parseInt(prevNumber)
}

function subtract() {
    return parseInt(prevNumber) - parseInt(currentNumber)
}

function multiply() {
    return parseInt(currentNumber) * parseInt(prevNumber)
}

function divide() {
    return parseInt(prevNumber) / parseInt(currentNumber)
}


let calculationOperator = "";
let currentNumber = "0";
let operator;
let prevNumber = "";


function updateDisplay(number) {
    calculatorScreen.textContent = number
}


function inputNumber(number){
    if (currentNumber === "0"){
        currentNumber = number
    } else 
    currentNumber += number;
}

function inputOperator(operator) {
    if (calculationOperator === ""){
        prevNumber = currentNumber;
    } 
    else if (calculationOperator === "+" || "-" || "*" || "/") {
        calculate();
        updateDisplay(currentNumber);
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
} 

let result = currentNumber;
function calculate() {
    if (calculationOperator == "+" ) {
        result = add(currentNumber, prevNumber)
    }
    else if (calculationOperator =="-") {
        result = subtract(currentNumber, prevNumber)
    }
    else if (calculationOperator == "*" ) {
        result = multiply(currentNumber, prevNumber)
    }
    else if (calculationOperator == "/" ) {
        if (currentNumber == "0"){
            alert("Error: cannot be divided by 0");
            updateDisplay(currentNumber)
        } else result = divide(currentNumber, prevNumber)
    }
    currentNumber = Math.round(result * 100 ) / 100;
    calculationOperator = "";
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        updateDisplay(currentNumber);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.dataset.value);
    })
})

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.dataset.value);
        updateDisplay(currentNumber)
    })
})


equalBtn.addEventListener("click", () => {
    calculate();
    updateDisplay(currentNumber);
})


clearBtn.addEventListener("click", () => {
    currentNumber = "0";
    result = currentNumber;
    prevNumber = "";
    calculationOperator = "";
    updateDisplay(currentNumber)
})