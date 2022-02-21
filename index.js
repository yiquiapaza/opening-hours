// https://github.com/opening-hours/opening_hours.js/tree/master

const opening_hours = require('opening_hours');

// Create the Opening Hours range
// Return a dates list
let oh = new opening_hours("Mo-Fr 08:00-18:00");

console.log("Opening hours object");
console.log(oh)


// getStatePair
console.log("Opening hours => getStatePair");
// Return a simple array by date
console.log(oh.getStatePair(new Date("August 19, 1975 08:15:30")));

// getState
console.log("Opening hours => getState")
// GetState return boolean value, is true when the date and time are in the rage
console.log(oh.getState(new Date("August 19, 1975 08:15:30")));
// Is false, the date and tiem are't int the rage
console.log(oh.getState(new Date("August 19, 1975 23:15:30")));

// getUnknown
console.log("Opening hours => getUnknown");
console.log(oh.getUnknown(new Date("August 20, 2020 20:15:30")));
// Is false, the date and tiem are't int the rage

// getStateString
console.log("Opening hours => getStateString");
console.log(oh.getStateString(new Date("February 15, 2022 12:15:30")));

// getComment
console.log("Opening hours => getComment")
console.log(oh.getComment(new Date("February 15, 2022 12:15:30")));

// getMatchingRule
console.log("Opening hours => getMatchingRule")
console.log(oh.getMatchingRule(new Date("February 15, 2022 12:15:30")));

// getWarnings
console.log("Opening hours => getWarnigns")
console.log(oh.getWarnings(new Date("February 15, 2022 12:15:30")));

// getPreffifyValue

// getNextChange

// Intgerval could be mouths, weeks and years
// when the date starts
let from = new Date("01 Jan 2022");

// when the date ends
let to = new Date("01 Feb 2022");

console.log("Opening Hours: " + oh);

let intervals = oh.getOpenIntervals(from, to);

for (var days in intervals)
  console.log(oh.getState(intervals[days][0]));


console.log("Example 1");
const example1 = new opening_hours("Mo-Su 0:00-24:00");
console.log(example1.getState());

console.log("Example 2");
const example2 = new opening_hours("Sa-Su 0:00-24:00");
console.log(example2.getState());

console.log("Example 3");
const example3 = new opening_hours("Mo-Su 08:00-18:00; Apr 10-15 off; Jun 08:00-14:00; Aug off; Dec 25 off");
console.log(example3.getState());



