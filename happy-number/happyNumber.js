/**
Any number will be called a happy number if, after repeatedly replacing it 
with a number equal to the sum of the square of all of its digits, leads 
us to number ‘1’.
All other (not-happy) numbers will never reach ‘1’.
Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Example 1:

Input: 23
Output: true (23 is a happy number)
Explanations: Here are the steps to find out that 23 is a happy number:

1.  2^2 + 3^​2 = 4 + 9 = 13
2.  1^​2 + 3^2 = 1 + 9 = 10
3.  1^2 + 0^2 = 1 + 0 = 1


Example 2:

Input: 12
Output: false (12 is not a happy number)
Explanations: Here are the steps to find out that 12 is not a happy number:

1.  1^2 + 2^2 = 1 + 4 = 5
2.  5^2 = 25
3.  2^2 + 5^2 = 4 + 25 = 29
4.  2^2 + 9^2 = 4 + 81 = 85
5.  8^2 + 5^2 = 64 + 25 = 89
6.  8^2 + 9^2 = 64 + 81 = 145
7.  1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
8.  4^2 + 2^2 = 16 + 4 = 20
9.  2^2 + 0^2 = 4 + 0 = 4
10.  4^2 = 16
11.  1^2 + 6^2 = 1 + 36 = 37
12.  3^2 + 7^2 = 9 + 49 = 58
13.  5^2 + 8^2 = 25 + 64 = 89

Step ‘13’ leads us back to step ‘5’ as the number becomes equal to ‘89’,
this means that we can never reach ‘1’, therefore, ‘12’ is not a happy number.
 */


const find_happy_number = function (num) {
  let previousNumbers = [];
  let result = false;

  (function checkNumber(number) {
    // base case
    if (number === 1) {
      result = true;
      return;
    }
    
    // else continue searching
    let digits = [... (number).toString()];
    let newNumber = digits.reduce((acc, curr) => {
      return acc + (curr ** 2);
    }, 0);
    
    // check if new number already seen, and return if it has
    if (previousNumbers.includes(newNumber)) return;
    
    // continue searching if new number hasn't alreasy been seen
    previousNumbers.push(newNumber);
    checkNumber(newNumber);
  })(num);

  return result;
};


console.log(`23 is${find_happy_number(23) ? '' : 'n\'t'} a happy number!`) // --> true
console.log(`12 is${find_happy_number(12) ? '' : 'n\'t'} a happy number!`) // --> false
console.log(`19 is${find_happy_number(19) ? '' : 'n\'t'} a happy number!`) // --> true