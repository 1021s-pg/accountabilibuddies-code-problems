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
  const originalNumberArray = time.replace(':','').split('').map((char) => parseInt(char));
  // const possibleNumberArray = [...originalNumberArray].sort();
  const maxNumbersForTime = [2, 9, 5, 9];
  let result = [...originalNumberArray];
  let timeComplexityCount = 0; // time complexity logging

  while (true) {
    timeComplexityCount++; // time complexity logging

    result[3]++;   // start adding to the minute digit

    // roll-over each higher digit if current digit it exceeds it's max (per maxNumbersForTime)
    if (result[3] > maxNumbersForTime[3]) {
      result[3] = 0;
      result[2]++;
    }

    if (result[2] > maxNumbersForTime[2]) {
      result[2] = 0;
      result[1]++;
    }

    if (result[1] > maxNumbersForTime[1]) {
      result[1] = 0;
      result[0]++;
    }

    if ((parseInt(`${result[0]}${result[1]}`)) > 23) { // special check for hours > 23
      result = [0, 0, 0, 0]; // reset digits if hours > 23
    }


    // check if result includes only original digits
    if (result.every((num) => originalNumberArray.includes(num))) {
      console.log(timeComplexityCount); // time complexity logging
      
      // return formatted string if true
      return `${result[0]}${result[1]}:${result[2]}${result[3]}`;
    }
  }
};

//////////////////////////////////////////////////////////////////////////////////////////
// TEST SUITE ////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

console.log(nextClosestTime('19:34')); // -> '19:39'
console.log(nextClosestTime('14:39')); // -> '14:41'
console.log(nextClosestTime('23:59')); // -> '22:22' [Complexity count: 1343]
console.log(nextClosestTime('00:50')); // -> '00:55'
console.log(nextClosestTime('23:50')); // -> '23:52'