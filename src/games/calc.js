import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const operations = '+-*';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error(`Error! ${operation} is invalid!`);
  }
};

const description = 'What is the result of the expression?';
const getRoundData = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 5);
  const lastIndexOfOperations = operations.length - 1;
  const operation = operations[getRandomNumber(0, lastIndexOfOperations)];
  const condition = `${num1} ${operation} ${num2}`;
  const rightAnswer = String(calculate(num1, num2, operation));
  return { condition, rightAnswer };
};

const gameCalc = () => {
  startBrainGame(description, getRoundData);
};

export default gameCalc;
