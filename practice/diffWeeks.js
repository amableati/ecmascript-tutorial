/*Write a JavaScript function to get time differences in weeks between two dates.*/
dt1 = new Date("June 13, 2013 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_weeks(dt1, dt2));

function diff_weeks(dt1, dt2) {
	let diff = (dt2.getTime() - dt1.getTime()) / 1000;
	diff /= (60 * 60 * 24 * 7);
	return Math.abs(Math.round(diff));
}
/*
Write a JavaScript function to find no of weeks in a month

*/
dt1 = new Date("December 18, 2022 11:13:00");
console.log(noOfWeeks(dt1));


function noOfWeeks(d){
	let dDay = d.getDate();
	return Number.parseInt(dDay/6);
}