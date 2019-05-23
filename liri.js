//requiring variables to call API's//
require("dotenv").config();


var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require('axios');
var request = require("request");
var fs = require("fs");



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
    bandsInTown(input)
    console.log("concert work?");
    break;
  }
}

//omdb 

function omdb(input) {
  var url = "http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=trilogy"
  axios.get(url).then(function(response){
    console.log(response.data);
    console.log("The title is: " + response.data.title);
    console.log("The year movie was released: " + response.data.year);
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("The movie was produced in: " + response.data.country.name);
    console.log("The language the movie is in: " + response.data.language);
    console.log("The movie plot is: " + response.data.plot);
    console.log("The actors are: " + response.data.actors);
        });
      }
//bandsInTown
function bandsInTown(input) {
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(url).then(function(response){
      console.log(response.data);
      console.log("The concert is at: " + response.data.venue);
      console.log("The location is: " + response.data.location);
      console.log("The concert is on: " + response.data.date);
      });
    };

//spotify 
// if (process.argv[4] === undefined || process.argv[4] === null) {
//     var song = process.argv[3];
//     // console.log(song);

// } else if (process.argv[4] !== undefined || process.argv[4] !== null) {
//     var song = process.argv[3] + ' ' + process.argv[4];
//     // console.log(song);
    
// } else {
//     console.log('Please enter a valid song');
    
// }


// var spotify = new Spotify(keys.spotifyKeys);

// // Get Spotify songs function
// function getSpotifySong(song) {
//     if (song === undefined || song === null) {
//         song = 'The Sign';
//     } else {
        
//     }

//     spotify
//     .search({ type: 'track', query: song, limit: 1 })
//     .then(function(response) {
        
//         console.log(`####################
//         Song: ${song} 
        
//         Artist: ${response.tracks.items[0].album.artists[0].name}
        
//         Album: ${response.tracks.items[0].album.name}
//         Preview URL: ${response.tracks.items[0].preview_url} `);
        


//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// };


//calling functions
liri(command, input)









//what each command should do//