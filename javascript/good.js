console.log("The file is linked.")
var zip;
var lng;
var lat;
var key = "AIzaSyDaYhBygIiyYUEu9oWv-iE86pu_YzrtqsQ";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=" + key;
var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
//when the zip is submitted gwt necessary info for good weather display
$("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("clicked");
   zip = $("#zip").val().trim();
   console.log(zip);

   var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=" + key;

   //call google geocode api to convert zip to long and lat
$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response); 
        console.log(response.results[0].geometry.location.lat);
        lat = response.results[0].geometry.location.lat;
        lng = response.results[0].geometry.location.lng;
         
        lat = lat.toString();
        lng = lng.toString();
        //use lat and long from google api in the hiking url for campgrounds and trails
                queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
               
                queryURL3 = "https://www.hikingproject.com/data/get-campgrounds?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
        //call hiking api to get hiking trails 
        $.ajax({
            url: queryURL2,
            method: "GET"
          }).then(function(response) {
                console.log(response);
                
                 })
       // call campground api
       $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function(response) {
            console.log(response);
            
             })

})});



