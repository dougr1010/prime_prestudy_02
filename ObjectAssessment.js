/*
Initially:
avengersMovie = {
    name : Avengers;
    runtime : 143 mins;
    releaseYear = 2012;
    "Director" : "Joss Whedon".
}
*/

//fixed
var avengersMovie = {
    name: "Avengers",
    runtime: "143 mins",
    releaseYear: 2012,
    Director: "Joss Whedon"
};

console.log(avengersMovie);

for (key in avengersMovie) {
	console.log(key + ": " +avengersMovie[key]);
}