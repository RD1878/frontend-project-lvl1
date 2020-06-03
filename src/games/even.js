import brainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const gameEven = () => {
  const question = 'Answer "yes" if number even otherwise answer "no".';
  const getTask = () => {
    const num = getRandomNumber(1, 100);
    if (num % 2 === 0) {
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

export default gameEven;
