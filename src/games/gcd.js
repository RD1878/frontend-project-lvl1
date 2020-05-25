import brainGame from '../index.js';
import greeting from '../cli.js';
import randomNumber from '../utilities/randomNumber.js';

const gameGcd = () => {
  const question = () => {
    console.log('Find the greatest common divisor of given numbers.');
  };
  const getRightAnswer = () => {
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
    const num1 = randomNumber();
    const num2 = randomNumber();
    console.log(`Question: ${num1} ${num2}`);
    return String(getMaxDivisor(num1, num2));
  };
  brainGame(greeting, question, getRightAnswer);
};

export default gameGcd;
