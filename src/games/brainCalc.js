import getRandomNumber from '../helpers/getRandom.js';
import startGame from '../index.js';

const operators = ['-', '+', '*'];
const description = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '-':
      return number3 - number4;
    case '+':
      return number3 + number4;
    case '*':
      return number3 * number4;
    default:
      throw new Error('invalid expression');
  }
};

const getRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

export default () => startGame(getRound, description);
