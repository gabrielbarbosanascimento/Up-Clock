function firstclock() {
	UR_Nu = new Date;
	UR_Indhold = showFilled(UR_Nu.getHours()) + ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());
	document.getElementById("ur").innerHTML = UR_Indhold;
	setTimeout("firstclock()",1000);
	}
	function showFilled(Value) 
	{
	return (Value > 9) ? "" + Value : "0" + Value;
}
