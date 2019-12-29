const FizzBuzz = pNum => {
  if (pNum === 0) return 0;

  if (pNum % 3 === 0 && pNum % 5 === 0) {
    return 'FizzBuzz';
  }

  if (pNum % 3 === 0) {
    return 'Fizz';
  }

  if (pNum % 5 === 0) {
    return 'Buzz';
  }

  return pNum;
};

const foo = () => 'bla';

export default FizzBuzz;
