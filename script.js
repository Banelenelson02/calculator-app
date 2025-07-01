let firstOperand = null;
let operator = null;
let newLine = true;

function digitBtnPressed(digit) {
    const inputBox = document.getElementById("inputBox");
    if (newLine || inputBox.value === "0") {
        inputBox.value = digit;
        newLine = false;
    } else {
        inputBox.value += digit;
    }
}

function digitBtnACPressed() {
    document.getElementById("inputBox").value = "0";
    firstOperand = null;
    operator = null;
    newLine = true;
}

function operatorPressed(op) {
    firstOperand = parseFloat(document.getElementById("inputBox").value);
    operator = op;
    newLine = true; // Prepare for next number
}

function calculate() {
    const secondOperand = parseFloat(document.getElementById("inputBox").value);
    let result;

    if (firstOperand === null || operator === null || isNaN(secondOperand)) {
        result = "Error";
    } else {
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
                break;
            default:
                result = "Error";
        }
    }

    document.getElementById("inputBox").value = result;
    // Reset memory for next calculation
    firstOperand = null;
    operator = null;
    newLine = true;
}