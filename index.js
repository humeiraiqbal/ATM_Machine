#! /usr/bin/env node
let myPin = 8880;
let myBalance = 20000;
let myName = "Humeira Iqbal";
console.log(`Welcome ${myName}`);
import inquirer from "inquirer";
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Your Pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "plz select option",
            type: "list",
            choices: ["check balance", "fast cash", "withdraw"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (operationAns.operation === "fast cash") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
            myBalance -= amountAns.amount;
            (console.log(`your remaining balance is: ${myBalance}`));
        }
        else if (operationAns.operation === "check balance") {
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else {
        console.log("Incorrect Pin number");
    }
}
