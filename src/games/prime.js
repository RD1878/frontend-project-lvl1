import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const conditionWord = 'Question:';
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getTask = () => {
  const num = getRandomNumber(1, 100);
  const condition = `${conditionWord} ${num}`;
  const rightAnswer = isPrime(num) && num > 1 ? 'yes' : 'no';
  return { condition, rightAnswer };
};

const gamePrime = () => {
  startBrainGame(description, getTask);
};

export default gamePrime;
