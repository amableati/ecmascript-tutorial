

/*
Greenwich Mean Time is the mean solar time at the Royal Observatory in Greenwich, London, counted from midnight.
Write a JavaScript function to get difference to Greenwich time (GMT) in hours.
*/

console.log(diff_to_GMT(new Date()));//"+05.500"

function diff_to_GMT(dt) {
 dt = new Date(dt);//450/60

/*console.log(new Date().getTimezoneOffset(), "-",
-new Date().getTimezoneOffset(), "-",
(Math.abs(new Date().getTimezoneOffset() / 60)));*/

  return (-dt.getTimezoneOffset() < 0 ? '-' : '+') 
+ (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') 
+ (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

