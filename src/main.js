const FizzBuzz = (pNum) => {
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

export default FizzBuzz;
