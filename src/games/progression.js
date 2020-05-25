import brainGame from '../index.js';
import greeting from '../cli.js';
import randomArray from '../utilities/randomArray.js';

const gameProgression = () => {
  const question = () => {
    console.log('What number is missing in the progression?');
  };
  const getRightAnswer = () => {
    const getLostNumber = (array, index) => {
      const leftArray = array.slice(0, index);
      const rightArray = array.slice(index + 1);
      const questionArray = [...leftArray, '..', ...rightArray];
      const stringOfQuestionArray = questionArray.join(' ');
      console.log(`Question: ${stringOfQuestionArray}`);
      return String(array[index]);
    };
    const randomIndex = Math.floor(Math.random() * 10);
    return getLostNumber(randomArray(), randomIndex);
  };
  brainGame(greeting, question, getRightAnswer);
};

export default gameProgression;
