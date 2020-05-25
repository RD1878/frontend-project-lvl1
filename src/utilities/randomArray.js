export default () => {
  const startNum = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const array = [startNum];
  for (let i = 0; i < 9; i += 1) {
    array.push(array[i] + step);
  }
  return array;
};
