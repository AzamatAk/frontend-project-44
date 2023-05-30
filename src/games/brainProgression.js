import getRandomNumber from '../helpers/getRandom.js';
import startGame from '../index.js';

const minProgLength = 5;
const maxProgLength = 10;
const minProgStep = 2;
const maxProgStep = 5;

const description = 'What number is missing in the progression?';

const getProgression = (length, step) => {
  const result = [];
  const startNumber = getRandomNumber();
  for (let i = startNumber; result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getRound = () => {
  const progressionLength = getRandomNumber(minProgLength, maxProgLength);
  const progressionStep = getRandomNumber(minProgStep, maxProgStep);
  const progression = getProgression(progressionLength, progressionStep);
  const hiddenValueIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(getRound, description);
