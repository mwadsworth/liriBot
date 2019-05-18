//requiring varibles to call API's//
require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require('axios');
var request = require("request");
// var fs = require("fs");
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
  })

}

//calling functions
liri(command, input)









//what each command should do//

//Spotify functions//


//Omdb functions//

//BandsInTown functions//

