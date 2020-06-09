import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const getProgression = (startNum, stepProgression, lenProgression) => {
  const progression = [startNum];
  for (let i = 0; i < lenProgression; i += 1) {
    progression.push(progression[i] + stepProgression);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const getRoundData = () => {
  const getLostNumber = (progression, indexOfLostElement) => {
    const rightAnswer = String(progression[indexOfLostElement]);
    const questionProgression = progression;
    questionProgression[indexOfLostElement] = '..';
    const condition = questionProgression.join(' ');
    return { condition, rightAnswer };
  };
  const indexOfLostElement = getRandomNumber(0, 9);
  const startNum = getRandomNumber(0, 9);
  const stepProgression = getRandomNumber(1, 9);
  const lenProgression = getRandomNumber(10, 15);
  const progression = getProgression(startNum, stepProgression, lenProgression);
  return getLostNumber(progression, indexOfLostElement);
};

const gameProgression = () => {
  startBrainGame(description, getRoundData);
};

export default gameProgression;
