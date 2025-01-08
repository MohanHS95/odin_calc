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
result.textContent = 0;
resultBar.appendChild(result);

const buttons = document.querySelectorAll("button");
let arr = [];

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
                let operand = parseFloat(result.textContent);
                if (!isNaN(operand)) {
                    arr.push(operand);
                    arr.push(button.textContent);
                    console.log(arr);
                }
                nums = []; // Clear nums after processing
            }

        }

        if (button.classList.contains("equals") && arr[0]) {
            if (nums.length > 0) {
                let operand = parseFloat(result.textContent);
                if (!isNaN(operand)) {
                    arr.push(operand);
                    console.log(arr);
                    result.textContent = Math.round(operate(arr[0],arr[1],arr[2]) * 1000000000)/1000000000;
                    arr.splice(0,3, parseFloat(result.textContent));
                }
                nums = []; // Clear nums after processing
            }
        }

        if (button.classList.contains("operator") && arr[1]) {
            if (nums.length > 0) {
                let operand = parseFloat(result.textContent);
                if (!isNaN(operand)) {
                    arr.push(operand);
                    console.log(arr);
                    result.textContent = Math.round(operate(arr[0],arr[1],arr[2]) * 1000000000)/1000000000;
                    arr.splice(0,3, parseFloat(result.textContent));
                    arr.push(button.textContent);
                }
                nums = []; // Clear nums after processing
            }
        }

        if (button.classList.contains("operator") && arr[0] && !arr[1]){
            arr.push(button.textContent);
        }        

        if (button.classList.contains("num") && arr[0] && !arr[1]) {
            arr = [];
            // result.textContent = nums.join('');
        }

        if (button.classList.contains("clear")) {
            arr = [];
            nums = [];
            result.textContent = 0;
        }

        if (result.textContent == Infinity) {
            const holdUp = "chillout";
            result.textContent = holdUp;    
        }

        if (button.classList.contains("point")) {
            if (nums.includes(".")) {;}
            else nums.push(".");

            if (result.textContent.includes(".")) {;}
            else result.textContent += ".";
        }

        if (button.classList.contains("backspace")) {
            if (nums.length > 0) {
                nums.pop();
                if (!nums[0]) {
                result.textContent = 0;
                }
                // else result.textContent = 0;
            }
        }

        // if (button.classList.contains("plusminus")) {
        //     if (arr.length > 0) {
        //         arr[0] = arr[0] * (-1);
        //         result.textContent = arr[0];
                
        //     }
        //     else result.textContent = nums.join('') * (-1);
        //     // console.log(nums);
        //     // nums.splice(0,nums.length,result.textContent);
        //     // console.log(nums);
        //     // console.log(arr);
        //             // nums.push(result.textContent);

        // }

        // if (button.classList.contains("percent")) {
        //     if(arr.length > 0 && !arr[1]) {
        //         arr[0] = arr[0]/100;
        //         result.textContent = arr[0];
        //     }
        //     else result.textContent = result.textContent / 100
        // }

    });
});










