import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function welcome() {
  let title = chalkAnimation.rainbow(
    "~Develp by Seikh Hamid~\n Let's Start the Game"
  );
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  title.stop();
}

await welcome();
async function guessGame() {
  const systemAnswer = Math.floor(Math.random() * 10);

  type ansType = {
    userGuess: number;
  };
  const userAnswer: ansType = await inquirer.prompt([
    {
      type: "number",
      name: "userGuess",
      message: "Enter your guess number b/w 1 to 10",
    },
  ]);

  console.log(
    chalk.yellow(
      `System Answer:${systemAnswer} Your Answer:${userAnswer.userGuess}`
    )
  );

  const { userGuess } = userAnswer;

  if (userGuess === systemAnswer) {
    console.log(chalk.green("Yesssss your answer is correct\n You win "));
  } else {
    console.log(chalk.redBright("Please try again better luck next time"));
  }
}

async function startAgain() {
  do {
    await guessGame();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "do you want to play again? Press y or n: y/n",
    });
  } while (
    again.restart == "y" ||
    again.restart == "Y" ||
    again.restart == "yes" ||
    again.restart == "YES"
  );
}
startAgain();
