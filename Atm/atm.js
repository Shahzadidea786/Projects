#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let mypin = 3333;
console.log("Welcome to ATM");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("Pin is Correct! Enter succesfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please Select the option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    // if the user select the withdraw
    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`The remaining Balance is ${balance} `);
        }
        else {
            console.log(`You have insufficient balance`);
        }
    }
    // else when user select the check balance
    else
        operationAns.operations === "check balance";
    {
        console.log(myBalance);
    }
}
else {
    console.log("Your Pin is worng! Faild");
}
