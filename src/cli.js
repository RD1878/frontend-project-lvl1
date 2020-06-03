import redlineSync from 'readline-sync';

export default () => {
  const name = redlineSync.question('May I have your name? ');
  return name;
};
