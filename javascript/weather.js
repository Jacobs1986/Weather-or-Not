
console.log("linked")
var zip;
var key = "2c2ebda745768cdab3335ed8a1f21aef"
$("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("clicked");
   zip = $("#zip").val().trim();
   console.log(zip);

   var queryURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&APPID=${key}`;

   
$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response.list)
        let date = response.list[0].dt;
        console.log(date);
})});