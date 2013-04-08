Is My Name Dead Yet?
=============

Checks your twitter feed and see's if you're dead.

Just upload to any hosting and you're good to go.

DEMO: http://isryanmcdonoughdeadyet.co.uk

Configuration
=============

Open assets/js/app.js

  var deadAfter = 2;  
  
  -This sets the amount of days to check have passed since your last tweet, if it's over that amount then we assume you're dead.

	var username = "ryanmcdonough"; 

  -Your twitter username

	var fullName = "Any Name";

  -Your name to show in the page title in the format : 'Yes/No, full name is/is not dead'

	var showCredit = false;

  -Set to true if you want to include a link to my twitter at the bottom.

