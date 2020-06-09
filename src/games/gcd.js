import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const getMaxDivisor = (a, b) => {
  if (a > b) {
    return a % b === 0 ? b : getMaxDivisor(b, a % b);
  }
  return b % a === 0 ? a : getMaxDivisor(a, b % a);
};

const description = 'Find the greatest common divisor of given numbers.';
const getRoundData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 10);
  const condition = `${num1} ${num2}`;
  const rightAnswer = String(getMaxDivisor(num1, num2));
  return { condition, rightAnswer };
};

const gameGcd = () => {
  startBrainGame(description, getRoundData);
};

export default gameGcd;
