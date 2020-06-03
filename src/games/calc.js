import brainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const gameCalc = () => {
  const question = 'What is the result of the expression?';
  const getTask = () => {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 5);
    const listOfOperations = '+-*';
    const operation = listOfOperations[Math.floor(Math.random() * listOfOperations.length)];
    switch (operation) {
      case '+':
        return {
          question: `Question: ${num1} ${operation} ${num2}`,
          rightAnswer: String(num1 + num2),
        };
      case '-':
        return {
          question: `Question: ${num1} ${operation} ${num2}`,
          rightAnswer: String(num1 - num2),
        };
      default:
        return {
          question: `Question: ${num1} ${operation} ${num2}`,
          rightAnswer: String(num1 * num2),
        };
    }
  };
  brainGame(question, getTask);
};

export default gameCalc;
