import brainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const gamePrime = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getTask = () => {
    const num = getRandomNumber(1, 100);
    const isEven = (number) => {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };
    if (isEven(num) && num > 1) {
      return {
        question: `Question: ${num}`,
        rightAnswer: 'yes',
      };
    }
    return {
      question: `Question: ${num}`,
      rightAnswer: 'no',
    };
  };
  brainGame(question, getTask);
};

export default gamePrime;
