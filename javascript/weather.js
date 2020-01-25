
console.log("linked")
var zip;
var key = "2c2ebda745768cdab3335ed8a1f21aef"
$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    zip = $("#zip").val().trim();
    console.log(zip);

    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=${key}`;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.list)
        let forecast = response.list;
        console.log(forecast);
        for (i = 0; i < 3; i++) {
            // get the date
            // can we also get time? 
            let date = forecast[i].dt;
            // convert the date to a more readable time.
            date = moment.unix(date).toDate();
            convertedDate = moment(date).format("h:mm A")
            // get the temperature
            temperature = forecast[i].main.temp;
            // console log the results
            console.log(convertedDate);
            console.log(`Temperature (F): ${Math.floor(temperature)}`)
        }
    })
});

/*
convert to F
--display weather
take in degree, weather.description to determine good or bad weather
 */