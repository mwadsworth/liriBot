
require("dotenv").config();

var keys = require("./keys.js");
var BandsInTown = require("bands-in-town");
var Spotify = require('node-spotify-api');
var Omdb = require('omdb');
var request = require("request");
var fs = require("fs");
var util = require("util");


var spotify = new Spotify(keys.spotify);


