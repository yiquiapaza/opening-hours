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
//let from = new Date("01 Jan 2022");

// when the date ends
//let to = new Date("01 Feb 2022");

console.log("Opening Hours: " + oh);

//let intervals = oh.getOpenIntervals(from, to);

//for (var days in intervals)
//  console.log(oh.getState(intervals[days][0]));


console.log("Example 1");
const example1 = new opening_hours("Mo-Su 0:00-24:00");
console.log(example1.getState());

console.log("Example 2");
const example2 = new opening_hours("Sa-Su 0:00-24:00");
console.log(example2.getState());

console.log("Example 3");
const example3a = new opening_hours("Mo-Su 08:00-18:00; Apr 10-15 off; Jun 08:00-14:00; Aug off; Dec 25 off");
const example3b = new opening_hours("Mo 10:00-12:00,12:30-15:00; Tu-Fr 08:00-12:00,12:30-15:00; Sa 08:00-12:00");
console.log(example3a.getState());
console.log(example3b.getState());

console.log("Example 4");
const example4a = new opening_hours("Mo-Sa 10:00-20:00; Mo off")
console.log(example4a.getState());
const example4b = new opening_hours("Mo-Sa 10:00-20:00; Tu 10:00-14:00")
console.log(example4b.getState());

console.log("Example 5");
const example5 = new opening_hours("sunrise-sunset");
console.log(example5.getState());

console.log("Example 6");
const example6 = new opening_hours("Mo 16:00+");
console.log(example6.getState());
console.log(example6.getUnknown());
console.log(example6.getStateString());
console.log(example6.getComment());

console.log("Example 7");
const example7 = new opening_hours("Apr-Oct: Fr-Su 10:00-18:00");
console.log(example7.getState()); 

console.log("Example 8");
const example8 = new opening_hours("week 1-53/2 Fr 09:00-12:00; week 2-52/2 We 09:00-12:00");
console.log(example8.getState());

console.log("Exampole 9");
const example9 = new opening_hours("Mo-Sa 08:00-13:00,14:00-17:00 || by appointment");
console.log(example9.getComment());
console.log(example9.getState());


