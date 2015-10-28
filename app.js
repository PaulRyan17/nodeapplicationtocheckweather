//require the module checkweather (created by me)
var check = require('./checkweather');//./ means same directory
//create a longlat, this one is Limerick city
var longlat = "40.7142,-74.0064";

//call the get function in the checkweather.js file
check.get(longlat);


