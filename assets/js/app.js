$(document).ready(function() {
	
	var deadAfter = 2;  //amount of days since last tweet to assume you're dead
	var deadThen = false;
	var username = "ryanmcdonough"; //twitter username
	var fullName = "Ryan McDonough"; //name to show in title
	var showCredit = false; //show a hey to ryanmcdonough
	
	//Check the configuration section the get this url
	var url = "https://script.google.com/macros/s/AKfycbwEQ6ikw8d2xGIUttWlwp7Xhz8hoxq83u7ZplYvecg7BnLY12I/exec?448386093071618048";
	$.getJSON(url, function(data){
	    $.each(data, function(i, item) {
			
			if(deadAfter > days_since_tweet(item.created_at))
			{
				 deadThen = false;
			}
			else {
				deadThen = true;
			}
	         
	    });
	});
	
	if(deadThen == false)
	{
		 document.title = "No, " + fullName + " is not dead.";
		 $("#dead").append("No");
		 $("#what_now").append("I'm not dead, find me on twitter: <a href='http://twitter.com/" + username + "'>" + username + "</a>");
	}
	else
	{
		document.title = "Yes, " + fullName + " is dead.";
		$("#dead").append("Yes");
		$("#what_now").append("Well I'm dead, say bye on twitter: <a href='http://twitter.com/" + username + "'>" + username + "</a>");
	}
	
	if(showCredit == true)
	{
		$("#little_project").append("<hr /> a quick script by <a href='http://twitter.com/ryanmcdonough'>@ryanmcdonough</a>");
	}

});

function days_since_tweet(time_value) {
	  var values = time_value.split(" ");
	  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
	  var parsed_date = Date.parse(time_value);
	  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
	  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
	  delta = delta + (relative_to.getTimezoneOffset() * 60);

	  var r = '';
	 
	  r = (parseInt(delta / 86400)).toString();

	  return r;
}
