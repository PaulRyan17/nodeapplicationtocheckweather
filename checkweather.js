'use strict';

var https = require('https');

var apikey = "729008a606d9d45859b33465bc1965bd";


function get(longlat)
{
	var uri = "https://api.forecast.io/forecast/" + apikey + "/"  + longlat;
	//var uri = "https://api.forecast.io/forecast/729008a606d9d45859b33465bc1965bd/40.7142,-74.0064";

	var request = https.get(uri, function(response){
		var body = "";

		response.on('data', function(chunk){
			body+=chunk;
		});

		//when we reach the end of the file
		response.on('end', function(){
			//parse the JSON from the body variable
			var weather = JSON.parse(body);

			console.log(weather.currently.summary);
		});
	});

	//deal with an error object
	process.on('uncaughtException', function (err) {
    	console.log(err);
	}); 
}

module.exports.get = get;