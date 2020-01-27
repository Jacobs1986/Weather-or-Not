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
    // set movieArray equal to response.reults
    let movieArray = response.results;
    // being the loop
    movieArray.forEach(array => {
        // create a div called card that will hold all of the movie information, give it a class of movie-card
        let card = $("<div>").addClass("movie-card");
        // get the information from arrays
        let title = array.title;
        console.log(title);
        let rating = array.vote_average;
        console.log(rating);
        let release = array.release_date;
        let overview = array.overview;
        let poster = array.poster_path;
        console.log(poster);
        // create paragraphs
        let titleP = $("<p>").text(title);
        let ratingP = $("<p>").text(`Rating (out of 10): ${rating}`);
        let releaseP = $("<p>").text(`Release Date: ${release}`);
        let overviewP = $("<p>").text(overview);
        // append paragraphs to the card
        card.append(titleP);
        card.append(ratingP);
        card.append(releaseP);
        card.append(overviewP);
        // display the card in the movies-list div
        $("#movies-list").append(card);
    })
})