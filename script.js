const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function (a,b) {
    return a * b;
}

const divide = function (a,b) {
    return a / b;
}

let num1;
let operator;
let num2;

const operate = function(num1, operator, num2) {
    let result;
    if (operator === "+") {
        result = add(num1,num2);
    }
    else if(operator === "-") {
        result = subtract(num1,num2);
    }
    else if (operator === "*") {
        result = multiply(num1,num2);
    }
    else if (operator === "/") {
        result = divide(num1,num2);
    }
    return result;
}