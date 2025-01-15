# odin_calc

A basic calculator with functions to add, subtract, multiply, and divide was created using HTML, CSS, and Javascript.

Functions for each operation were created and then consolidated into one function, operate, which performs the operation according to the specified operator parameter, and two number parameters.

Next, a calculator interface was created using HTML and CSS along with CSS flexbox properties. 

To store the individual digits that were added to the result bar display of the calculator, an array to store numbers was used, while a separate one was used to store operands and the selected operator. Once an operand was stored, the array to record digits would be cleared for further recording.

The operate function was directly used to update the display and the result than parsed back into the array, ready for further input. 

Further functionality includes the ability to provide decimal operands, clear the cache completely, a backspace for user to undo their last input if needed, a snarky message if attempting to divide by 0, and a limit to the length of the resulting display. 

Finally, keyboard support was added using an object that stores keydown keys and corresponding button IDs. It then adds a styling class to that button using a timeout as well as processes the event as a click to initiate the functions for operations. 

Opportunities for further modification in the future include adding a +/- button that could convert numbers from positive to negative and back as well as a % operation to convert numbers into decimals automatically.