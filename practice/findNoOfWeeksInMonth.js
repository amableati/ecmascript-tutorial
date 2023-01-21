/*
Write a JavaScript function to find no of weeks in a month
*/
console.log(noOfWeeks("December 18, 2022 11:13:00"));
console.log(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());



function noOfWeeks(d){
	d = new Date(d);
	d = new Date(d.getFullYear(), d.getMonth()+1, 0);
				//Year, 		Month, 				Days
	let days = d.getDate();	
	console.log(d.getFullYear(), d.getMonth()+1, days);
	//30 - 4 weeks 4 days
	return Number.parseInt(days/7) + " weeks " + days%7 + " days";
}

