//Section 1
//1) A parameter is a variable accepted and used by a function.  Parameters are named when a function is declared
//An argument is a value that you pass to a function when you call it.
//2) Console.log simply logs values to the developer console.  Return will serve as the output of a function to be
//used in other parts of your code later.
//3) A function returning a value means that function can be used later on in your code to affect other logic.

//Section 2
const checkPalindrome = (word) => {
  let lowerWord = word.toLowerCase().replace(/[^A-Z0-9]/ig, '');
  let backwardsWord = lowerWord.split('').reverse().join('');
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

// Hungry Question 2
const insertDash = (num) => {
  let numArray = num.toString().split('').map(digit => parseInt(digit));
  let newArray = [];
  for (let i = 0; i <= numArray.length; i++) {
    newArray.push(numArray[i]);
    if((numArray[i] % 2 === 1) && (numArray[i+1] % 2 === 1)){
      newArray.push('-');
    }
  }
  return newArray.join('');
}
console.log(insertDash(454793));

//Hungry Question 3
const reverseString = (str) => {
  let reversedString = '';
  for (let i = str.length-1; i >=0 ; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

//Hungry Question 6
const checkWordPalindrome = (phrase) => {
  let phraseArray = phrase.toLowerCase().split(' ').map(str => str.replace(/[^A-Z]/ig, ''));
  let reversePhrase = phrase.toLowerCase().split(' ').map(str => str.replace(/[^A-Z]/ig, '')).reverse();
  console.log(phraseArray);
  console.log(reversePhrase);
  for (let i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i] != reversePhrase[i]){
      return false;
    }
  }
  return true;
}
