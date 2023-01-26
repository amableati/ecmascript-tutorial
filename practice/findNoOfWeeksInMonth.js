/*
Write a JavaScript function to find no of weeks in a month
*/
console.log(noOfWeeks("December 18, 2022 11:13:00"),"\n");
//console.log(new Date().getFullYear(),"-", new Date().getMonth(),"-", new Date().getDate());

function noOfWeeks(d){
	d = new Date(d);
	d = new Date(d.getFullYear(), d.getMonth()+1, 0);
				//Year, 		Month, 				Days
	let days = d.getDate();	
	//30 - 4 weeks 4 days
	return Number.parseInt(days/7) + " weeks " + days%7 + " days";
}


//Feb 1st 2023
//Jan 31 2023 - 31 -0 day = 31
//Dec 31 2022








//if any parameter underflows, it "borrows" from the higher positions.
console.log(new Date(2023, 1, 1).toDateString());//The default is 1.
console.log(new Date(2023, 1, 0).toDateString());
console.log(new Date(2023, 1, -1).toDateString());

console.log(new Date(2023, 0, -1).toDateString());
console.log(new Date(2023, -1, -1).toDateString());
console.log(new Date(0, -1, -1).toDateString());
console.log(new Date(-1, -1, -1).toDateString());