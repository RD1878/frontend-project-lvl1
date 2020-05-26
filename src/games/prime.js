import brainGame from '../index.js';
import greeting from '../cli.js';
import randomNumber from '../utilities/randomNumber.js';
import isEven from '../utilities/isEven.js';

const gamePrime = () => {
  const question = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  };

  const getRightAnswer = () => {
    const num = randomNumber();
    if (isEven(num) && num > 1) {
      console.log(`Question: ${num}`);
      return 'yes';
    }
    console.log(`Question: ${num}`);
    return 'no';
  };
  brainGame(greeting, question, getRightAnswer);
};

export default gamePrime;
