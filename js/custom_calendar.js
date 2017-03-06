function toggleMonth(month, direction) 
{
	if(direction === "left")
	{
		if(month === "january")
		{

		}
		if(month === "february")
		{
			var monthObjects = document.getClassName("calendar");
			for(var i = 0; i < monthObjects.length; i++)
			{
				if(monthObjects[i].id === "january")
				{
					monthObjects[i].style.display = "block";
				}
				else
				{
					monthObjects[i].style.display = "none";
				}
			}
		}
		if(month === "march")
		{

		}
		if(month === "april")
		{

		}
		if(month === "may")
		{

		}
		if(month === "june")
		{

		}
		if(month === "july")
		{

		}
		if(month === "august")
		{

		}
		if(month === "september")
		{

		}
		if(month === "october")
		{

		}
		if(month === "november")
		{

		}
		if(month === "december")
		{

		}
	}
	

    if (x.className === "active") 
    {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "active";
    }
}

function getCurrentMonth()
{
	
}
