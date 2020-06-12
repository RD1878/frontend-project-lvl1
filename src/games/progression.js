import startBrainGame from '../index.js';
import getRandomNumber from '../utilities/randomNumber.js';

const makeProgression = (startNum, stepProgression, lenProgression) => {
  const progression = [];
  for (let i = 0; i < lenProgression; i += 1) {
    const currentNum = startNum + i * stepProgression;
    progression.push(currentNum);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const getRoundData = () => {
  const startNum = getRandomNumber(0, 9);
  const stepProgression = getRandomNumber(1, 9);
  const lenProgression = getRandomNumber(10, 15);
  const progression = makeProgression(startNum, stepProgression, lenProgression);
  const lastIndexOfProgression = progression.length - 1;
  const indexOfLostElement = getRandomNumber(0, lastIndexOfProgression);
  const rightAnswer = String(progression[indexOfLostElement]);
  progression[indexOfLostElement] = '..';
  const condition = progression.join(' ');
  return { condition, rightAnswer };
};

const gameProgression = () => {
  startBrainGame(description, getRoundData);
};

export default gameProgression;
