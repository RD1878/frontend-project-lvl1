import brainGame from '../index.js';
import greeting from '../cli.js';
import randomNumber from '../utilities/randomNumber.js';

const gameCalc = () => {
  const question = () => {
    console.log('What is the result of the expression?');
  };
  const getRightAnswer = () => {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const listOfOperations = '+-*';
    const operation = listOfOperations[Math.floor(Math.random() * listOfOperations.length)];
    switch (operation) {
      case '+':
        console.log(`Question: ${num1} ${operation} ${num2}`);
        return String(num1 + num2);
      case '-':
        console.log(`Question: ${num1} ${operation} ${num2}`);
        return String(num1 - num2);
      default:
        console.log(`Question: ${num1} ${operation} ${num2}`);
        return String(num1 * num2);
    }
  };
  brainGame(greeting, question, getRightAnswer);
};

export default gameCalc;
