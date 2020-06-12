import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getRoundData = () => {
  const num = getRandomNumber(1, 100);
  const condition = String(num);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return { condition, rightAnswer };
};

const gamePrime = () => {
  startBrainGame(description, getRoundData);
};

export default gamePrime;
