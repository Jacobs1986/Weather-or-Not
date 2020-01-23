// I need to pull the information from the Best sellers list, both the fiction and non fiction

// fiction list
let fictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

$.ajax({
    url: fictionURL,
    method: "GET"
}).then(function(fictionBookList) {
    console.log(fictionBookList);
})

// nonfiction list
let nonFictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

$.ajax({
    url: nonFictionURL,
    method: "GET"
}).then(function(nonFictionBookList) {
    console.log(nonFictionBookList);
})