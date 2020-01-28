let goodWeatherButtons = ['Trails', 'Camp Grounds']

let badWeatherButtons = ['Movies', "Books"]

let weatherButtonIndex = 0

//this isn't working through all of them...
for (let i = 0; i < goodWeatherButtons.length; i++) {
    let button = $("<button>").text(goodWeatherButtons[i]).attr("class", "btn btn-outline-warning").attr("id", "activityButton");
    $("#accordion").append(button);

    


};
$("#accordian").accordion();

for (let i = 0; i < badWeatherButtons.length; i++) {
    let button = $("<button>").text(badWeatherButtons[i]).attr("class", "btn btn-outline-warning").attr("id", "activityButton");
    $("#accordion").append(button);

};


//$(".selector").accordion({
  //  animate: 200
//});




//https: //api.jqueryui.com/accordion/</button>