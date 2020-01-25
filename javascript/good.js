console.log("The file is linked.")
var zip = "70115";
var lng;
var lat;
var key = "AIzaSyDaYhBygIiyYUEu9oWv-iE86pu_YzrtqsQ";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=" + key;
var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905"
//function getLonLat() {
   //zip = $("#zip").val().trim;
//};
   
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
                queryURL2 = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=50&key=200673425-58529fa038b4b328e30d69f2afdf1905";
        
        $.ajax({
            url: queryURL2,
            method: "GET"
          }).then(function(response) {
                console.log(response);
                
                 })

})



