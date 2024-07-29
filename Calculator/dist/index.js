import inquirer from "inquirer";
//import chalk from "chalk";
async function askQuestion() {
    inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to prform? \n",
            choices: ["+", "-", "*", "/"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter this First number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter this Second number"
        }
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
    });
}
;
askQuestion();
