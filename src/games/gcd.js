import brainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const gameGcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const getTask = () => {
    const getMaxDivisor = (a, b) => {
      if (a === b && a !== 0 && b !== 0) {
        return a;
      }
      while (a !== b && a !== 0 && b !== 0) {
        if (a > b) {
          return getMaxDivisor(a - b, b);
        }
        return getMaxDivisor(a, b - a);
      }
      return a === 0 ? b : getMaxDivisor(b, a);
    };
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 10);
    return {
      question: `Question: ${num1} ${num2}`,
      rightAnswer: String(getMaxDivisor(num1, num2)),
    };
  };
  brainGame(question, getTask);
};

export default gameGcd;
