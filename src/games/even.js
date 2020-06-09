import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getRoundData = () => {
  const num = getRandomNumber(1, 100);
  const condition = num;
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return { condition, rightAnswer };
};

const gameEven = () => {
  startBrainGame(description, getRoundData);
};

export default gameEven;
