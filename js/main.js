function reverseWords(str) {
  console.log(str.split('').reverse().join('').split(' ').reverse().join(' '));
}

reverseWords('Это пример!');

function squareAndConcatenate(numbers) {
  return numbers
    .toString()
    .split('')
    .map((number) => number ** 2)
    .join('');
}

console.log(squareAndConcatenate(123));

function getDigitalRoot(n) {
  if (n < 10) return n;

  return getDigitalRoot(
    n
      .toString()
      .split('')
      .reduce((sum, current) => sum + Number(current), 0)
  );
}

console.log(getDigitalRoot(158));

function reducedSum(n) {
  return n
    .toString()
    .split('')
    .reduce((sum, current) => sum + Number(current), 0);
}

console.log(reducedSum(15));
