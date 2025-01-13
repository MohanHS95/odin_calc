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
result.textContent = '';
resultBar.appendChild(result);

const buttons = document.querySelectorAll("button");
let arr = [];
let nums = [];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("num") ) {
            nums.push(button.textContent);
            result.textContent = nums.join('');
        }

        if (button.classList.contains("operator") && !arr[1]) {
            if (nums.length > 0) {
                let operand = parseFloat(result.textContent);
                if (!isNaN(operand)) {
                    arr.push(operand);
                    arr.push(button.textContent);
                    console.log(arr);
                }
                nums = [];
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
                nums = [];
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
                nums = [];
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
            result.textContent = '';
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
                result.textContent = nums.join('');
                if (!nums[0]) {
                result.textContent = '';
                }
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

// document.addEventListener("keydown", function(e) {

//         if(e.key >= 0) {
//             nums.push(e.key);
//             result.textContent = nums.join('');
//         }

//         if ((e.key == "+"||e.key == "-"||e.key== "/"||e.key == "*") && !arr[1]) {
//             if (nums.length > 0) {
//                 let operand = parseFloat(result.textContent);
//                 if (!isNaN(operand)) {
//                     arr.push(operand);
//                     console.log(arr);
//                 }
//                 nums = [];
//             }

//         }

//         if ((e.key === "=" ||e.key === "Enter") && arr[0]) {
//             //Enter button not working
//             if (nums.length > 0) {
//                 let operand = parseFloat(result.textContent);
//                 if (!isNaN(operand)) {
//                     arr.push(operand);
//                     console.log(arr);
//                     result.textContent = Math.round(operate(arr[0],arr[1],arr[2]) * 1000000000)/1000000000;
//                     arr.splice(0,3, parseFloat(result.textContent));
//                 }
//                 nums = []; 
//             }
//             e.preventDefault();
//         }

//         if ((e.key == "+"||e.key == "-"||e.key== "/"||e.key == "*") && arr[1]) {
//             if (nums.length > 0) {
//                 let operand = parseFloat(result.textContent);
//                 if (!isNaN(operand)) {
//                     arr.push(operand);
//                     console.log(arr);
//                     result.textContent = Math.round(operate(arr[0],arr[1],arr[2]) * 1000000000)/1000000000;
//                     arr.splice(0,3, parseFloat(result.textContent));
//                     arr.push(e.key);
//                 }
//                 nums = []; 
//             }
//         }

//         if ((e.key == "+"||e.key == "-"||e.key== "/"||e.key == "*") && arr[0] && !arr[1]){
//             arr.push(e.key);
//         }        

//         if (e.key >= 0 && arr[0] && !arr[1]) {
//             arr = [];
//         }

//         if (e.key === 'Escape') {
//             arr = [];
//             nums = [];
//             result.textContent = 0;
//         }


//         if (e.key === ".") {
//             if (nums.includes(".")) {;}
//             else nums.push(".");

//             if (result.textContent.includes(".")) {;}
//             else result.textContent += ".";
//         }

//         if (e.key === 'Backspace' || e.key === 'Delete') {
//             if (nums.length > 0) {
//                 nums.pop();
//                 result.textContent = nums.join('');
//             }
//                 if (!nums[0]) {
//                 result.textContent = 0;
//                 }
            
//         }

//     });

document.addEventListener('keydown', function(e) {
    const keyMap = {
        '0': 'btn-0',
        '1': 'btn-1',
        '2': 'btn-2',
        '3': 'btn-3',
        '4': 'btn-4',
        '5': 'btn-5',
        '6': 'btn-6',
        '7': 'btn-7',
        '8': 'btn-8',
        '9': 'btn-9',
        '+': 'btn-add',
        '-': 'btn-subtract',
        '*': 'btn-multiply',
        '/': 'btn-divide',
        '=': 'btn-equals',
        'Enter': 'btn-equals',
        'Escape': 'btn-clear',
        'Backspace': 'btn-backspace',
        'Delete': 'btn-backspace',
        '.': 'btn-point'
    };

    const buttonId = keyMap[e.key];
    if (buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active');
            }, 150);

            button.click(); 
            e.preventDefault();
        }
    }
});











