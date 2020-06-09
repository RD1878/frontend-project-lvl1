import readlineSync from 'readline-sync';

const roundsCount = 3;
const questionWord = 'Question:';

const startEngine = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(description);
  const count = (n) => {
    if (n === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { condition, rightAnswer } = getRoundData();
    console.log(`${questionWord} ${condition}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    count(n + 1);
  };
  count(0);
};

export default startEngine;
