//Section 1
//1) A parameter is a variable accepted and used by a function.  Parameters are named when a function is declared
//An argument is a value that you pass to a function when you call it.
//2) Console.log simply logs values to the developer console.  Return will serve as the output of a function to be
//used in other parts of your code later.
//3) A function returning a value means that function can be used later on in your code to affect other logic.

//Section 2
const checkPalindrome = (word) => {
  let lowerWord = word.toLowerCase();
  let backwardsWord = lowerWord.split('').reverse().join('');
  console.log(lowerWord, backwardsWord);
  if (backwardsWord === lowerWord){
    return true;
  } else {
    return false;
  }
}

//Section 3
const sumDigits = (num) => {
  let digitArray = num.toString().split('').map(digit => parseInt(digit));
  let reducer = (acc, cur) => acc + cur;
  let sum = digitArray.reduce(reducer);
  return sum;
}

//Section 4
const calculateSide = (side1, side2) => Math.hypot(side1, side2);

//Section 5
const sumArray = (arr) => arr.reduce((red, acc,) => red+acc);

//Section 6
const checkPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

const printPrimes = (num) => {
  for (let i = 1; i <= num; i++) {
    if (checkPrime(i)){
      console.log(`${i} is a prime number`)
    }
  }
}
