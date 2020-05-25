import readlineSync from 'readline-sync';

const brainGame = (getName, question, getRightAnswer) => {
  const user = getName();
  const name = user;
  question();
  const count = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const rightAnswer = getRightAnswer();
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    return n + count(n + 1);
  };
  count(0);
};

export default brainGame;
