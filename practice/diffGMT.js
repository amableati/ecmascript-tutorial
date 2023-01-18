/*Write a JavaScript function to get difference to Greenwich time (GMT) in hours.*/
dt = new Date();
console.log(diff_to_GMT(dt));//"+05.500"

function diff_to_GMT(dt) {
 
  return (-dt.getTimezoneOffset() < 0 ? '-' : '+') 
+ (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') 
+ (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}


/*
Write a JavaScript function to find whether or not the date is in daylights savings time
*/