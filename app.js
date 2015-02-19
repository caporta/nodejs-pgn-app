var profile = require("./profile.js");

var gameIDs = process.argv.slice(2);

gameIDs.forEach(profile.get);