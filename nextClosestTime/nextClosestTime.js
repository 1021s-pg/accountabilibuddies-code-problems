/* 

Given a time represented in the format "HH:MM", form the next closest time by 
reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", 
"12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:
Input: "19:34"
Output: "19:39"

Example 2:
Input: "23:59"
Output: "22:22"

*/

function nextClosestTime(time) {
  let originalNumberArray = time.replace(':','').split('').map((char) => parseInt(char));
  let possibleNumberArray = [...originalNumberArray].sort();
  let result = originalNumberArray;
  let maxNumbersForTime = [2, 3, 5, 9];

  // start adding digits to the result

  // role over each digit if it exceeds it's max digit (per maxNumbersForTime)


    // check if result includes only original digits
    if (result.every((num) => originalNumberArray.includes(num))) {
      
      // return formatted string if true
      return `${result[0]}${result[1]}:${result[2]}${result[3]}`;
    }
};

//////////////////////////////////////////////////////////////////////////////////////////
// TEST SUITE ////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

console.log(nextClosestTime('19:34')); // -> '19:39'
// console.log(nextClosestTime('23:59')); // -> '22:22'