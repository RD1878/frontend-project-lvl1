import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const description = 'What is the result of the expression?';
const conditionWord = 'Question:';
const getTask = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 5);
  const listOfOperations = '+-*';
  const operation = listOfOperations[Math.floor(Math.random() * listOfOperations.length)];
  const condition = `${conditionWord} ${num1} ${operation} ${num2}`;
  let rightAnswer;
  switch (operation) {
    case '+':
      rightAnswer = String(num1 + num2);
      break;
    case '-':
      rightAnswer = String(num1 - num2);
      break;
    default:
      rightAnswer = String(num1 * num2);
      break;
  }
  return { condition, rightAnswer };
};

const gameCalc = () => {
  startBrainGame(description, getTask);
};

export default gameCalc;
