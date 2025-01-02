const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

let num1;
let operator;
let num2;

const operate = function (num1, operator, num2) {
    let result;
    if (operator === "+") {
        result = add(num1, num2);
    }
    else if (operator === "-") {
        result = subtract(num1, num2);
    }
    else if (operator === "*") {
        result = multiply(num1, num2);
    }
    else if (operator === "/") {
        result = divide(num1, num2);
    }
    return result;
}

const resultBar = document.querySelector("#result-bar");

const result = document.createElement("text");
result.setAttribute("id", "result");
result.textContent = undefined;
resultBar.appendChild(result);

const buttons = document.querySelectorAll("button");
const arr = [];

// buttons.forEach((button) => {

//     button.addEventListener("click", () => {
//         if (button.className = "num") {
//             let display1 = result.textContent;
//             display1 += parseInt(button.textContent);
//             let number = parseInt(display1);
//             result.textContent = number;
            
//             if (button.id === "divide" && number) {
//                 let operand = number;
//                 arr.push(operand);
//                 console.log(arr);

//                 if (button.className = "num" && operand) {
//                     result.textContent = number;
                    
                    
//                 }
//             }
//             // else if (button.id === "plus") {}

//         }
//     })
// });
let nums = [];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Handle number buttons
        if (button.classList.contains("num") ) {
            nums.push(button.textContent);
            result.textContent = nums.join('');
        }

        // Handle the divide button
        if (button.classList.contains("operator") && !arr[1]) {
            if (nums.length > 0) {
                let operand = parseInt(nums.join(''), 10);
                if (!isNaN(operand)) {
                    arr.push(operand);
                    arr.push(button.textContent);
                    console.log(arr);
                }
                nums = []; // Clear nums after processing
            }

        }


        if (button.classList.contains("equals")) {
            if (nums.length > 0) {
                let operand = parseFloat(nums.join(''));
                if (!isNaN(operand)) {
                    arr.push(operand);
                    console.log(arr);
                    result.textContent = operate(arr[0],arr[1],arr[2]);
                    arr.splice(0,3, parseFloat(result.textContent));
                }
                nums = []; // Clear nums after processing
            }
        }

        if (button.classList.contains("operator") && arr[1]) {
            if (nums.length > 0) {
                let operand = parseFloat(nums.join(''));
                if (!isNaN(operand)) {
                    arr.push(operand);
                    console.log(arr);
                    result.textContent = operate(arr[0],arr[1],arr[2]);
                    arr.splice(0,3, parseFloat(result.textContent));
                    arr.push(button.textContent);

                }
                nums = []; // Clear nums after processing
            }
        }


    });
});










