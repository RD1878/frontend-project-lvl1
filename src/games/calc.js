import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const listOfOperations = '+-*';

const resultOfOperation = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      throw new Error(`Error! ${operation} is invalid!`);
  }
};

const description = 'What is the result of the expression?';
const getRoundData = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 5);
  const operation = listOfOperations[getRandomNumber(0, 2)];
  const condition = `${num1} ${operation} ${num2}`;
  const rightAnswer = resultOfOperation(num1, num2, operation);
  return { condition, rightAnswer };
};

const gameCalc = () => {
  startBrainGame(description, getRoundData);
};

export default gameCalc;
