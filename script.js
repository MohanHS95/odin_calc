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

const resultBar = document.querySelector("#result-bar");

const result = document.createElement("text");
result.setAttribute("id","result");
result.textContent = "";
resultBar.appendChild(result);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    if(button.className === "num") {
    let num1 = parseInt(button.textContent);
    button.addEventListener("click", () => {
    result.textContent += num1;
    return num1;
    })
    }
    else if(button.className === "divide") {
    button.addEventListener("click",() => {
    let operator = "/";
    let num2 = parseInt(button.textContent)
    result.textContent += num2;
    let answer = operate(num1,operator,num2);
    result.textContent = answer; 
    }
     )
 
    };
  });

  console.log(buttons)
