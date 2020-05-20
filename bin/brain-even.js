#!/usr/bin/env node
import redlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const iter = (n) => {
    if (n === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    const answer = redlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    return n + iter(n + 1);
  };
  iter(0);
};

game();
