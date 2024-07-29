#! /usr/bin/env node
import inquirer from "inquirer";
//import chalk from "chalk";

async function askQuestion() {
  // we will use the only inquirer in arrow fuction method and get output throught
  // inquirer
  const ans = await inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "operator",
      message: "Which operation you want to prform? \n",
      choices: ["+", "-", "*", "/"],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter this First number",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter this Second number",
    },
  ]);
  // we will use this method and get output throunght arrow function
  //.then((ans) => {
  // Use user feedback for... whatever!!
  //
  if (ans.operator == "+") {
    console.log(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`);
  } else if (ans.operator == "-") {
    console.log(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`);
  } else if (ans.operator == "*") {
    console.log(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`);
  } else if (ans.operator == "/") {
    console.log(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`);
  }
  //})
}

askQuestion();
