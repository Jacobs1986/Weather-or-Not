// I need to pull the information from the Best sellers list, both the fiction and non fiction

// fiction list
let fictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

bookList = () => {
    $("#weatherTable").prepend(
        `<tr>
        <td>Time</td>
        <td>Temp (F)</td>
        <td>Skys</td>
    </tr>`)
var res = $("<div>").html('<h3>Good thing there is plenty to do inside!</h3>');

$("#weatherStuff").prepend(res);
    $("#generatehere").html('<div class="accordion" id="list"><h3>Fiction Books</h3><div id="fiction"></div><h3>Nonfiction Books</h3><div id="nonfiction"></div><h3>Movies</h3><div id="movies-list"></div></div>');
    $(function () {
        $(".accordion").accordion()
    });
    $.ajax({
        url: fictionURL,
        method: "GET"
    }).then(function (fictionBookList) {
        let list = fictionBookList.results.books;
        for (let i = 0; i < list.length; i++) {
            bookDisplay(list[i], "fiction");
        }
        // $("#list").accordion("refresh");
        // $(".ui-accordion-content").css({'height': '337px'});
    })

    // nonfiction list
    let nonFictionURL = "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=3YQuGFy92xIcnvvGkCgI8xxyrhi7grZk";

    $.ajax({
        url: nonFictionURL,
        method: "GET"
    }).then(function (nonFictionBookList) {
        let list = nonFictionBookList.results.books;
        for (let i = 0; i < list.length; i++) {
            bookDisplay(list[i], "nonfiction");
        }
        // $("#list").accordion("refresh");
        // $(".ui-accordion-content").css({'height': '337px'});
    })
}

let bookDisplay = (list, displayID) => {
    console.log(list);
    console.log(displayID);
    // create the book card where all the information is going to go, this will be a div with a class of .bookCard
    let book = $("<div>").addClass("bookCard");
    // get the title, author, description and book_image and save them to different variables
    // let title = list.title;
    // let author = list.author;
    let description = list.description;
    let link = list.amazon_product_url;
    let bookImage = list.book_image;
    // create paragraph for the title, author and description
    // title = $("<p>").text(title);
    // author = $("<p>").text(author);
    description = $("<p>").text(description);
    // add class for each: title "bookTitle" author "bookAuthor" description "bookDescription"
    // title.addClass("bookTitle");
    // author.addClass("bookAuthor");
    description.addClass("bookDescription");
    // append each to the book card
    // book.append(title);
    // book.append(author);
    // create cover variable with the src being bookImage
    let cover = $("<img>").attr("src", bookImage);
    let coverLink = $("<a>").attr("href", link).append(cover);
    coverLink.attr("target", "_blank");
    // add a class of cover to cover
    cover.addClass("cover");
    // append to the book card
    book.append(coverLink);
    book.append(description);
    // append book card to the apporiate div
    $(`#${displayID}`).append(book);
}