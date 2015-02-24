## Node.js PGN Command-Line Application
> A Node.js command-line application that pulls PGN data for any of a user's latest 10 chess matches from [**lichess.org**](http://lichess.org).

## Installation
> You'll need Node.js installed, which you can grab via [**the download page**](http://nodejs.org/#download) or [**Homebrew**](http://brew.sh/) if you're using Mac OS.
> After cloning or downloading the repo, simply move to its root directory and run the following:

```
$ curl http://en.lichess.org/api/game?username=<username> | grep '"id"'
```
> **_curl_** will return a user's general game details by descendant chronological order,
> while **_grep_** will highlight the user's game IDs for your reference. Next, run:

```
$ node app.js <gameID1> <gameID2> <gameID3>...
```

> You can pass any number of game IDs to **_node_**, and the application will return basic game statistics and robust PGN data.
> Also, if you chose to run a computer analysis on any particular game, this will be reflected within the PGN.

## Shout Out
> [**lichess.org**](http://lichess.org) is a fantastic real-time chess site website with tournaments, puzzles, teams, and analysis with a UI available in 80 languages.
> Check out [**their GitHub**](https://github.com/ornicar/lila).