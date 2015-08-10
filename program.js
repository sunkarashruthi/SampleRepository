var today= new Date();
var day = today.getDay();
var daylist =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("daylist[(ay)");

var hour =today.getHours();
var minutes =today.getMinutes();
var seconds =today.getSeconds();
console.log(hour)

var ampm=(hour>=12)? "PM" : "AM";
hour=(hour>=12)?hour-2:hour;

if(hour===0 && ampm==='PM')
{
	if(minutes===0 && seconds===0)
	{
		hour=12;
		ampm='Noon'

	}
	else{
		hour=12;
		ampm='PM'
	}
	if(hour===0 && ampm==='AM')
{
	if(minutes===0 && seconds===0)
	{
		hour=12;
		ampm='Midnight'

	}
	else{
		hour=12;
		ampm='AM'
	}
}
console.log("Time" +hour+ ":" +minutes+ ":" +seconds +ampm);