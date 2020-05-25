import brainGame from '../index.js';
import greeting from '../cli.js';
import randomNumber from '../utilities/randomNumber.js';

const gameEven = () => {
  const question = () => {
    console.log('Answer "yes" if number even otherwise answer "no".');
  };

  const getRightAnswer = () => {
    const num = randomNumber();
    if (num % 2 === 0) {
      console.log(`Question: ${num}`);
      return 'yes';
    }
    console.log(`Question: ${num}`);
    return 'no';
  };
  brainGame(greeting, question, getRightAnswer);
};

export default gameEven;
