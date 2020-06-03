import brainGame from '../index.js';

const gameProgression = () => {
  const question = 'What number is missing in the progression?';
  const getTask = () => {
    const getLostNumber = (array, index) => {
      const leftArray = array.slice(0, index);
      const rightArray = array.slice(index + 1);
      const questionArray = [...leftArray, '..', ...rightArray];
      const stringOfQuestionArray = questionArray.join(' ');
      return {
        question: `Question: ${stringOfQuestionArray}`,
        rightAnswer: String(array[index]),
      };
    };
    const randomIndex = Math.floor(Math.random() * 10);
    const randomArray = () => {
      const startNum = Math.floor(Math.random() * 10);
      const step = Math.floor(Math.random() * 10);
      const array = [startNum];
      for (let i = 0; i < 9; i += 1) {
        array.push(array[i] + step);
      }
      return array;
    };
    return getLostNumber(randomArray(), randomIndex);
  };
  brainGame(question, getTask);
};

export default gameProgression;
