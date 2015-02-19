var http = require("http");


//print out message
function print(gameDetails) {
    console.log(gameDetails);
}

//print out error messages
function printError(e) {
    console.error(e.message);
}

function getPGN(gameID) {
    var request = http.get("http://en.lichess.org/game/export/" + gameID + ".pgn", function (response) {
        var gameDetails = "";

        response.on("data", function(data) {
          gameDetails += data;
        });

        response.on("end", function(){
            if (response.statusCode === 200) {
                print(gameDetails);
            } else {
                //status code error
                printError({message: "There was an error getting the details for game ID: " + gameID +". (" + http.STATUS_CODES[response.statusCode] + ")"});
            }
        });
    });
    
    //connection error
    request.on("error", printError);
}

module.exports.get = getPGN;
