#! /usr/bin/env node
import inquirer from "inquirer";
const Num = await inquirer.prompt([{ message: "Enter 1st Number:", type: "number", name: "first" },
    { message: "Enter 2nd Number:", type: "number", name: "second" },
    { message: "Enter the Operation", type: "list", name: "Operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison", "Modulas", "Exponent"], }]);
if (Num.Operation === "Addition") {
    console.log(`The answer of sum is : ${Num.first + Num.second}`);
}
else if (Num.Operation === "Subtraction") {
    console.log(`The answer of Subtraction is : ${Num.first - Num.second}`);
}
else if (Num.Operation === "Multiplication") {
    console.log(`The answer of Multiplication is : ${Num.first * Num.second}`);
}
else if (Num.Operation === "Divison") {
    console.log(`The answer of Divison is : ${Num.first / Num.second}`);
}
else if (Num.Operation === "Modulas") {
    console.log(`The answer of Modulas is : ${Num.first % Num.second}`);
}
else {
    console.log(`The answer in Exponent of 1st and 2nd numbers is : ${Num.first ** 2} and ${Num.second ** 2}`);
}
;
