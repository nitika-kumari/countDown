const endDate="6 November 2024 10:00 PM"
document.querySelector("#end").innerHTML=endDate;
const inputs=document.querySelectorAll("input");
function clock(){
	const end=new Date(endDate);
	const now=new Date();
	const diff=(end-now);
	if(diff<0) return;
	inputs[0].value=Math.floor(diff/(1000*60*60*24));
	inputs[1].value=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
	inputs[2].value=Math.floor((diff%(1000*60*60))/(1000*60));
	inputs[3].value=Math.floor((diff%(1000*60))/1000);
}

clock() 
setInterval(clock,1000);