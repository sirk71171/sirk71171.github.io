let add = (a,b) => {return (a + b)};
let subtract = (a,b) => {return (a - b)};
let multiply = (a,b) => {return (a * b)};
let divide = (a,b) => {return (a / b)};

let operate = (a = 0, b = 0, operator) => {
    if (operator == "+") {
        return add(a,b);

    }
    else if (operator == '-') {
        return subtract(a,b);
    }
    else if (operator == '*') {
        return multiply(a,b);
    }
    else {
        return divide(a,b);
    }
}
document.addEventListener("DOMContentLoaded",() => {
    function display (expression) {
        let display = document.getElementById("display");
        display.innerHTML = expression;
    }
    let firstNum = [];
    let secondNum = [];
    let operatorSelect = [];
    document.addEventListener('click', function(e){
        let elementID = e.target.id;
        let val = document.getElementById(elementID).innerText
        if (val !== "+" && val !== "-" && val !== "*" && val !== "/" && val !== "Evaluate") {
            if (operatorSelect.length === 0 && secondNum.length === 0 && firstNum.includes(".") !== true) {
                firstNum.push(val);
            }
            else if(operatorSelect.length === 0 && secondNum.length === 0 && firstNum.includes(".") === true) {
                if (val === ".") {
                    firstNum = firstNum;
                }
                else {
                    firstNum.push(val);
                }
            }
        }
        else if ((val == "+" || val == "-" || val == "*" || val == "/" && val !== "Evaluate") && operatorSelect.length == 0) {
                operatorSelect.push(val);
            }
            if (val !== "+" && val !== "-" && val !== "*" && val !== "/" && val !== "Evaluate") {
                if ((operatorSelect == "+" || operatorSelect == "-" || operatorSelect == "*" || operatorSelect == "/") && operatorSelect.length == 1 && firstNum.length !== 0 && secondNum.length == 0) {
                    secondNum.push(val);
                }
        else if (operatorSelect.length !== 0 && secondNum.length >= 1 && val !== ".") {
            if (secondNum.includes(".") && secondNum.length >= 1) {
                secondNum.push(val);
            }
            else {
                secondNum.push(val);
                } 
        }
        else if (operatorSelect.length !== 0 && secondNum.length >= 1 && val == ".") {
            if (secondNum.includes(".") !== true) {
                secondNum.push(val);
            }
            }
        }
        let firstNumber = firstNum.join("");
        let operatorUsed = operatorSelect.join("");
        let secondNumber = secondNum.join("");
        let int1 = parseFloat(firstNumber, 10);
        let int2 = parseFloat(secondNumber, 10);
        display(firstNumber + operatorUsed + secondNumber);
        if (val == "Evaluate" && firstNum.length !== 0 && secondNum.length !== 0 && operatorSelect.length == 1 && int2 !== 0) {
            result = operate(int1, int2, operatorUsed).toFixed(3);
            display(result);
        }
        else if (val == "+" || val == "-" || val == "*" || val == "/") {
            if (secondNum.length !== 0 && operatorSelect.length >= 1 && int2 !== 0) {
                result = operate(int1, int2, operatorUsed).toFixed(3);
                operatorSelect.shift();
                firstNum = [];
                secondNum = [];
                firstNum.push(result);
                display(String(result) + val);
                operatorSelect.push(val);
            }
            else if (secondNum.length == 0) {
                if (val !== "Evaluate") {
                    display(firstNumber + val);
                }
                
            }
        }
        else if (val == "Evaluate" && (firstNum.length == 0 || secondNum.length == 0 )) {
            display("ERROR: Please enter an expression.");
            firstNum = [];
            secondNum = [];
            operatorSelect = [];
        }
        else if (val == "Evaluate" && int2 == 0 && operatorUsed == "/") {
            display("ERROR: Only God can create one from nothing. ")
            firstNum = [];
            secondNum = [];
            operatorSelect = [];
        }
        else if (val == "Clear") {
            firstNum = [];
            secondNum = [];
            operatorSelect = [];
            display("");
        }
    })
})
