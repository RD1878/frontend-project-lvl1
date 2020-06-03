import readlineSync from 'readline-sync';
import greeting from './cli.js';

const brainGame = (question, getTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();
  console.log(`Hello, ${userName}`);
  console.log(question);
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const task = getTask();
    console.log(task.question);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== task.rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task.rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    count(n + 1);
  };
  count(0);
};

export default brainGame;
