// I need to pull the information from the Best sellers list, both the fiction and non fiction

// fiction list
let fictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

$.ajax({
    url: fictionURL,
    method: "GET"
}).then(function(fictionBookList) {
    let list = fictionBookList.results.books;
    for (let i = 0; i < list.length; i++) {
        bookDisplay(list[i], "listFiction");
    }
})

// nonfiction list
let nonFictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

$.ajax({
    url: nonFictionURL,
    method: "GET"
}).then(function(nonFictionBookList) {
    let list = nonFictionBookList.results.books;
    /*
    for (let i = 0; i < list.length; i++) {
        bookDisplay(list[i], "nonfiction");
    }
    */
})

let bookDisplay = (list, displayID) => {
    console.log(list);
    console.log(displayID);
    // create the book card where all the information is going to go, this will be a div with a class of .bookCard
    let book = $("<div>").addClass("bookCard");
    // get the title, author, description and book_image and save them to different variables
    let title = list.title;
    // create paragraph for the title, author and description
    title = $("<p>").text(title);
    // add class for each: title "bookTitle" author "bookAuthor" description "bookDescription"
    title.addClass("bookTitle");
    // append each to the book card
    book.append(title);
    // create cover variable with the src being bookImage
    // append to the book card
    // append book card to the apporiate div
    $(`#${displayID}`).append(book);
}