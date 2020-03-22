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
//brute force solution, 
function nextClosestTime(time) {
  //convert current time into hours and minutes
  let hour = parseInt(time.substring(0, 2));
  let minute = parseInt(time.substring(3,5));
 
  const options = new Set();
  for (let i = 0; i < time.length; i++) {
      if(time[i] !== ":") options.add(time[i]);
  }


  while (true) { //tick the clock forward until we eventually reach the next valid time based on the constraints
      if (++minute === 60) {
        minute = 0;
        hour++;
        hour %= 24;
      }
      let current, sHour, sMin; //weird string stuff to format appropriately
      if(hour < 10) {
        sHour = "0" + hour;
      } else {
        sHour = hour;
      }
      if(minute < 10) {
        sMin = "0" + minute;
      } else {
        sMin = minute;
      }
      current = sHour + ":" + sMin; // build time string
      
      let closest = true;

      for (let i = 0; i < current.length; i++) { //check if all elements of time time string are in the options Set
        if (current[i] === ":") continue;

        if (!options.has(current[i])) { //invalid entry, break to begin while loop again
          closest = false;
          break;
        }
      }
      if (closest) return current;
  }
};