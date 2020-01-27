let goodWeatherButtons = ['Go for a Hike', 'Grill Out', 'Make a Summer Drink', 'Stargaze']

let badWeatherButtons = ['Make Cocoa', "Read a Book", "Bake a Treat", "Play a Video Game"]

let weatherButtonIndex = 0

//this isn't working through all of them...
for (let i = 0; i < goodWeatherButtons[weatherButtonIndex].length; i++) {
    $("#accordian").html("<div>").text(goodWeatherButtons[weatherButtonIndex]).attr("class", "btn btn-outline-warning").attr("id", "activityButton");
    weatherButtonIndex++;
};



$(".selector").accordion({
    animate: 200
});



`

<h3></h3>//h3 = first result
<div> 
  <p>
  
  </p>
</div>//result content
<h3></h3>//h3 = second result//
<div>
  <p>
  </p>
</div>  //result content

<h3></h3>//h3 = third result//
<div>
  <p>
  </p>
</div>  //result content

<h3></h3>//h3 = fourth result
<div>
  <p>
  </p>
</div>  //p = result content;