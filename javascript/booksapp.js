// I need to pull the information from the Best sellers list, both the fiction and non fiction

// fiction list
let fictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

$.ajax({
    url: fictionURL,
    method: "GET"
}).then(function(fictionBookList) {
    let list = fictionBookList.results.books;
    for (let i = 0; i < list.length; i++) {
        bookDisplay(list[i], "fiction");
    }
})

// nonfiction list
let nonFictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

$.ajax({
    url: nonFictionURL,
    method: "GET"
}).then(function(nonFictionBookList) {
    let list = nonFictionBookList.results.books;
    for (let i = 0; i < list.length; i++) {
        bookDisplay(list[i], "nonfiction");
    }
})

let bookDisplay = (list, typeofList) => {
    console.log(list.title);
    console.log(typeofList);
}