
$(document).ready(function () {
    console.log("linked");
    var zip;
    var key = "2c2ebda745768cdab3335ed8a1f21aef";
    $("#submit").on("click", function (event) {
        event.preventDefault();

        console.log("clicked");
        zip = $("#zip").val().trim();
        console.log(zip);
        $("#weatherTable").empty();
        $("#weatherStuff").empty();

        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&APPID=${key}&cnt=3`;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.list);
            let forecast = response.list;
            console.log(forecast);
            for (i = 0; i < 3; i++) {
                // get the date
                // can we also get time? 
                let date = forecast[i].dt;
                // convert the date to a more readable time.
                date = moment.unix(date).toDate();
                let convertedDate = moment(date).format("h:mm A");
                // get the temperature
                let temperature = forecast[i].main.temp;
                // get the weather description
                let description = forecast[i].weather[0].description;
                //get main for percipitaion 
                let main = forecast[i].weather[0].main;
                // console log the results
                //let icon = forecast[i].weather[0].icon;
                //console.log("icon " + icon);
                //let iconImage = $("<img>").attr("src", `http://openweathermap.org/img/wn/${icon}.png`);
                console.log(convertedDate);
                console.log(`Temperature (F): ${Math.floor(temperature)}`)
                console.log(description);
                // display results into the table
                $("#weatherTable").append(
                    `<tr>
                    <td>${convertedDate}</td>
                    <td>${Math.floor(temperature)}</td>
                    <td>${description}</td> 
                </tr>`

                );
                //$("#weatherStuff").append(iconImage);
                // clear the zip


                $("#zip").val("").focus();

            };

            temp = forecast[0].main.temp;
            main = forecast[0].weather[0].main;
            date = forecast[0].dt;
            date = moment.unix(date).toDate();
            convertedDate = moment(date).format("hh:mm ");
            console.log("date " + convertedDate);
            console.log(temp);
            console.log(main);

            //depending on conditions run good or bad weather function

            //need to break the loop if 
            //what if we made an avg temp variable and a description array to check?
            if (main == "Thunderstorm") {
                $("#weatherStuff").html("<i class='fas fa-cloud-showers-heavy' style='font-size:40px'></i>");

            } else if (main == "Drizzle" || main == "Rain") {
                $("#weatherStuff").html("<i class='fas fa-cloud-rain' style='font-size:40px'></i>");
            } else if (main == "Snow") {
                $("#weatherStuff").html("<i class='far fa-snowflake' style='font-size:40px'></i>");
            } else if (main == "Mist" || main == "Smoke" || main == "Fog" || main == "Haze") {
                $("#weatherStuff").html("<i class='fas fa-smog' style='font-size:40px'></i>");
            } else if (main == "Clear") {
                $("#weatherStuff").html("<i class='fas fa-sun' style='font-size:40px'></i>");
            } else {
                $("#weatherStuff").html("<i class='fas fa-cloud' style='font-size:40px'></i>");
            };

            if (temp < "50" || main == "Rain" || main == "Snow" || main == "Thunderstorm" || main == "Drizzle") {
                bookList();
                movieList();
            } else {
                goodWeather(zip);
            }
        })
    })
})