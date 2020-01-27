// testing to make sure things are linked
console.log("linked");

// the api key
let key = "95804496ea455c7b61da8ba727ca99ec";
console.log(key);

// URL
queryURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response.results);
    // create a div called card that will hold all of the movie information, give it a class of movie-card
    let card = $("<div>").addClass("movie-card");
    
})