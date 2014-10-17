// born 8:15am local time in Leningrad (UTC+3) -->
function dynamicAge() {
	var today=new Date();
	var bday=new Date("February 16, 1986 05:15:00");
	var age=((today-bday)/1000/60/60/24/365).toFixed(9);

	document.getElementById('age').innerHTML=age + "year-old";
	t=setTimeout('dynamicAge()',100);
}
