//requiring varibles to call API's//
require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require('axios');
var request = require("request");
var fs = require("fs");
// var util = require("util");


var spotify = new Spotify(keys.spotify);
//user input variables
var command = process.argv[2];
console.log("COMMAND IS: " +command);
var input = process.argv[3];
console.log("INPUT IS: " +input);
//switch case statments for liri commands//

function liri(command, input) {
  switch(command) {
    case "spotify-this": 
    //insert spotify function here
    console.log("did it work?");
    break; 

    case "movie-this":
    //insert omdb function here
    omdb(input)
    console.log("movie work");
    break;

    case "concert-this":
    //insert bandsInTown function here
    console.log("concert work?");
    break;
  }
}

//omdb 

function omdb(input) {
  var url = "http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=trilogy"
  axios.get(url).then(function(response){
    console.log(response.data);
    axios.get(URL).then(function(response) {
        // parse the response body (string) to a JSON object
        var jsonData = response.data;
        // showData ends up being the string containing the show data we will print to the console
        var movieData = [
          "Title: " + jsonData.title,
          "Year: " + jsonData.year,
          "Rating: " + jsonData.rating.average,
          "Produced in: " + jsonData.country.name,
          "Language: " + jsonData.summary,
          "Plot: " + jsonData.plot,
          "Actors: " + jsonData.actors
        ].join("\r\n");
  
        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", movieData + divider, function(err) {
          if (err) throw err;
          console.log(movieData);
        });
      });
  })
}
//bandsInTown
function bandsInTown(input) {
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(url).then(function(response){
      console.log(response.data);
      var jsonData = response.data;
      // showData ends up being the string containing the show data we will print to the console
      var concertData = [
        "venueName: " + jsonData.venue,
        "venueLocation: " + jsonData.location, //how-to- used moment.js
        "Date: " + jsonData.date,
      ].join("\r\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", concertData + divider, function(err) {
        if (err) throw err;
        console.log(concertData);
      });
    });
//spotify 

function spotify(input) {
    var url = ""
}


//calling functions
liri(command, input)









//what each command should do//




