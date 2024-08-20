const display = document.getElementById("display");
let result = 0;
let currentOperator = null;

function appendToDisplay(button) {
    if (["+", "-", "*", "/"].includes(button)) {
        calculate();
        currentOperator = button;
        display.value = "";
    } else {
        display.value += button;
    }
}

function clearDisplay() {
    result = 0;
    display.value = "";
    currentOperator = null;
}

function sum(number) {
    result += Number(number);
}

function subtract(number) {
    result -= Number(number);
}

function multiply(number) {
    result *= Number(number);
}

function divide(number) {
    if (number != 0) {
        result /= Number(number);
    } else {
        display.value = "Error";
        result = 0; // Reset result after error
    }
}

function calculate() {
    const number = Number(display.value);
    
    if (currentOperator === "+") {
        sum(number);
    } else if (currentOperator === "-") {
        subtract(number);
    } else if (currentOperator === "*") {
        multiply(number);
    } else if (currentOperator === "/") {
        divide(number);
    } else {
        result = number; // Handles the first number entered
    }
    
    display.value = result;
    currentOperator = null;
}
