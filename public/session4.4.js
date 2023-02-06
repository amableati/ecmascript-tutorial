/**
 * Number & Date session 4
 */
/*JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight 
at the beginning of January 1, 1970, UTC*/

//Greenwich Mean Time is the mean solar time at the Royal Observatory in Greenwich, London, counted from midnight
/*
DST- Daylight saving time, also referred as daylight time, and summer time, 
is the practice of advancing clocks during warmer months so that darkness falls at a later clock time.
*/

console.log(Date());//returns a string representation of the current date and time equivalent to new Date().toString()
console.log(new Date(12123));//returns a new Date object.
console.log(Date.parse("01/01/2023"), "\n");

console.log(new Date(121239999999),"-", new Date(),"-", new Date(-19800000 ),"-", new Date(0));

console.log(Date.parse("Aug 9, 1995"), "\n");//Returns 807937200000 in time zone GMT-0300, and other values in other time zones


//getTimezoneOffset - Returns the time-zone offset in minutes for the current locale.



console.log("2022-02-01",new Date().getTimezoneOffset(), "\n"); //-330 GMT
console.log("2022-02-01",new Date("2022-02-01").getTimezoneOffset(), "\n"); //- 3:30 GMT
// 300 output for New York where the timezone is UTC-05:00.


///82834234 - secound + off 330 = 82834563


console.log("2022-08-01",new Date("2022-08-01").getTimezoneOffset(), "\n"); 
// 240 output for New York where the timezone is UTC-05:00. In regions that use DST

console.log("2022-01-27",new Date("2022-01-27").getTimezoneOffset(), "\n"); 
// -480 output for Japan where the timezone is UTC+08:00.

console.log("Sino-Japanese War 1943-01-27",new Date("1943-01-27").getTimezoneOffset(), "\n"); 
// -540 output for Japan, when Shanghai was under Japanese control



