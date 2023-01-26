/*
Daylight saving time, also referred to as daylight savings time or simply daylight time, and summer time, 
is the practice of advancing clocks during warmer months so that darkness falls at a later clock time.

Write a JavaScript function to find whether or not the date is in daylights savings time
*/
console.log(isDST(new Date("2023-01-21 12:00:57")));
console.log(new Date("2023-01-21 13:00:57"));


function isDST(d) {
    let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();

//console.log(jan, jul);
    return Math.max(jan, jul) !== d.getTimezoneOffset();
}