import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const description = 'Answer "yes" if number even otherwise answer "no".';
const conditionWord = 'Question:';
const isEven = (num) => num % 2 === 0;
const getTask = () => {
  const num = getRandomNumber(1, 100);
  const condition = `${conditionWord} ${num}`;
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return { condition, rightAnswer };
};

const gameEven = () => {
  startBrainGame(description, getTask);
};

export default gameEven;
