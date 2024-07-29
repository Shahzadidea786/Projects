import inquirer from "inquirer";

let guess = Math.floor(Math.random() * 10 + 1);
//console.log(guess);

let guessnumber = await inquirer.prompt({
  message: "Enter your Number",
  type: "number",
  name: "userguest",
});
if (guessnumber.userguest === guess) {
  console.log("Yes! Your Answer is correct \n You Win");
} else console.log("Ohooo noo! your Answer is worrng \n You Loser");
