"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//Creating input messages
var answer = await inquirer_1.default.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
//Conditional Statements:
if (answer.operator === "Addition") {
    console.log("Your Answer is ".concat(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log("Your Answer is ".concat(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log("Your Answer is ".concat(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log("Your Answer is ".concat(answer.firstNumber / answer.secondNumber));
}
else {
    console.log("Please select a valid operator");
}
