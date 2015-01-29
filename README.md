# first-angular-app
WIP - SPA to display sunrise and sunset times

## Setup Instructions (for WIP)
1. Download files
2. Set up cross-origin research sharing patch
3. Open sun-app.html page
4. Click display

## Technologies Used
* AngularJS  
* HTML  
* CSS  
* Bootstrap  
* API  
* Moment.js  

## My Thought Process
**1. Create the design template**  
  I like to see a visual representation of where my data is going to go to support each feature. Yellow/orange felt like an appropriate color palette to go with the sun theme. I wanted a simple and clean interface so I made the results table hidden until the user clicks on the "display" button. 

**2. Understand the sunrise sunset API** 
  The most important feature is for the user to know what times the sun is rising and setting on a given day. This particular API uses latitude and longitude to determine location so I believed that I should at least get that going first and then can figure out how to incorporate the address instead later.

  I created a controller to manage a GET request for the given example lat/long and today's date. The console informed me of an error with the XMLHttpRequest loading. My band-aid fix is a Chrome extension that allows cross-origin research sharing until I can learn more about what this means and figure out a more permanent solution.

  The date is the logical parameter to change first to be dynamic. Right now it is a scrape of the value entered but not ideal (see limitations below).

  Glaring limitations with this current set up: 1) This is a single GET request. I want to make multiple requests using the date range the user puts in; 2) This request happens automatically but it really shouldn't happen until the display button is clicked; 3) I need some sort of date validation to ensure that the date is in the format that is acceptable to the GET request. 

**3. Get the default date information filled in**
  Dates are a bit tricky. I found Moment.js as an easy way to capture today's date and then used jQuery to update the input field with both today's date and the date a week prior.

**4. Get each date in the query to be listed in the results table**
  I tried to figure this out but to no avail. I looked at just using jQuery to manipulate the DOM with loops. I was able to gather each day in the range with alerts but they would not appear in their designated column. I just couldn't really determine if jQuery and Angular don't play nice together or what.

## What I'd Do Next 
* Fix the current limitations

* Add the ability to sort the columns

* Add the more detailed information for each date

* Incorporate Geocoding API to match address information to lat and lng
  This would also need data validation

* Testing - since my "app" is in its early stages there are no tests. 

* Understand if there are any potential security pitfalls

* Refactor the code

## What I Would Have Differently
If I had had more time to devote to this, I would have gone through an in depth tutorial of Angular on Treehouse first. I watched several short videos, read some documentation, and Googled/Stack Overflowed specific concepts but I didn't have a strong handle on how Angular works overall. This is only the second app I've ever tried to make and it was a reminder that I still have a lot to learn!


## Nice to Haves...
* Responsive design
* Set limitations on how large the date range can be
* Ability to export data