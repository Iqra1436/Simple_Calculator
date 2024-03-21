#! /usr/bin/env node
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter your first numer", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices:["addition","Subtraction","Multiplication","Division"]
  },
]);
//Conditional Statement
if (asnwer.operator === "addition") {
    console.log(asnwer.FirstNumber + asnwer.SecondNumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.FirstNumber - asnwer.SecondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.FirstNumber * asnwer.SecondNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.FirstNumber / asnwer.SecondNumber);
}
else{
    console.log("Please Enter Valid operator")
}
