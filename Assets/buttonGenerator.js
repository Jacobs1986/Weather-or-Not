let goodWeatherButtons = ['Go for a Hike', 'Grill Out', 'Make a Summer Drink', 'Stargaze']

let badWeatherButtons = ['Make Cocoa', "Read a Book", "Bake a Treat", "Play a Video Game"]

let weatherButtonIndex = 0

//this isn't working through all of them...
for (let i = 0; i < goodWeatherButtons[weatherButtonIndex].length; i++) {
    $("#stuffResultsButtonArea").html("<div>").text(goodWeatherButtons[weatherButtonIndex]).attr("class", "btn btn-outline-warning").attr("id", "activityButton");
    weatherButtonIndex++;
};