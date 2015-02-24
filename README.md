## Node.js PGN Command-Line Application
> A Node.js command-line application that pulls PGN data for any of a user's chess matches via the [**lichess.org**](http://lichess.org) API.

## Installation
> TODO: You'll need Node.js installed, which you can grab via [**the download page**](http://nodejs.org/#download) or [**Homebrew**](http://brew.sh/) if you're using Mac OS.

## Usage
> TODO: After cloning or downloading the repo, simply move to its root directory and run the following:

```
$ curl http://en.lichess.org/api/game?username=<username> | grep '"id"'
```
> **_curl_** will return a user's basic game details from his or her previous 10 games by descendant chronological order,
> while **_grep_** will highlight the user's game IDs for your reference.

> Note that this first step is optional -- if you already have your reference gameID(s) on hand, use those.

> TODO: Next, run:

```
$ node app.js <gameID1> <gameID2> <gameID3>...
```

> You can pass any number of game IDs to **_node_**, and the application will return game statistics and robust PGN data.
> Also, if you chose to run a computer analysis on any particular game, this will be reflected within the PGN.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Shout Out
> [**lichess.org**](http://lichess.org) is an awesome real-time chess site website with tournaments, puzzles, teams, and analysis with a UI available in 80 languages.
> Check out [**their GitHub**](https://github.com/ornicar/lila).
