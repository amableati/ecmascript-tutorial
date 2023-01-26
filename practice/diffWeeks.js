/*Write a JavaScript function to get time differences in weeks between two dates.*/
dt1 = new Date("Jan 24, 2023 00:00:00");
dt2 = new Date("Jan 17, 2023 00:00:00");
console.log(diff_weeks(dt1, dt2));

console.log(dt1.getTime());
//1 sec = 1000 millisecound

function diff_weeks(dt1, dt2) {
	//return Math.abs(dt2-dt1)/(24*60*60*7*1000);
	let day = (dt1.getTime() - dt2.getTime()) / 1000;
	return Math.abs(day)/(24*60*60*7);
}



























/*function diff_weeks(dt1, dt2) {
	let diff = (dt2.getTime() - dt1.getTime()) / 1000;
	diff /= (60 * 60 * 24 * 7);
	return Math.abs(Math.round(diff));
}
*/