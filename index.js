// https://github.com/opening-hours/opening_hours.js/tree/master

const opening_hours = require('opening_hours');

let oh = new opening_hours('Mo-Fr 08:00-18:00'); 


// Intgerval may be could be mouth
let from = new Date('01 Jan 2022');
let to = new Date('01 Feb 2022');

console.log("Opening Hours: " + oh);

let intervals = oh.getOpenIntervals(from, to);

for (var i in intervals)
    console.log(
      "We are " +
        (intervals[i][2] ? "maybe " : "") +
        "open from " +
        (intervals[i][3] ? '("' + intervals[i][3] + '") ' : "") +
        intervals[i][0] +
        " till " +
        intervals[i][1] +
        "."
    );
