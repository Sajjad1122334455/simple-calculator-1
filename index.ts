import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber"},
    { message: "enter seconde number", type: "number", name: "secondNumber", },

    { message: "select one of the operator to perform operator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],},


]);

if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select a valid operator");

}