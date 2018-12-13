var $newGameButton = document.getElementById('new-game-button');
var gameRunning = false;
var x = $("#number-to-guess");



var counter = 0;
var winCounter = 0;
var lostCounter = 0;
// var xxx = Math.floor((Math.random() * 12) + 1);
// console.log(xxx);
var numberOptions = [];


for (var i = 0; i < "4"; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    // Creating an ID for each image to be able to assign a value 
    imageCrystal.attr('id', "crystal-image-" + i);

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/cr1.PNG");

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    // location.reload();
};

function newGame() {

    gameRunning = true;
    x.text = Math.floor((Math.random() * 101) + 19);
    $("#number-to-guess").html(x.text);
    $("#score").html("0");
    counter = 0;


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    for (i = 0; i < 4; i++) {
        // This generate the ramdom # for the crystals
        var randomNum = Math.floor(Math.random() * 12) + 1;
        console.log(randomNum);
        $("#crystal-image-" + i).attr("data-crystalvalue", randomNum);
    }
    //imageCrystal.attr("data-crystalvalue", numberOptions[i]);
}


// Add even listener for new game button
$newGameButton.addEventListener('click', newGame);


$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    var newSCore = $("#score");
    newSCore.text = counter += crystalValue;
    $("#score").html(newSCore.text);

    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === x.text) {
        winCounter++;
        $("#wins").html(winCounter);
        gameRunning = false;
        alert("You win!");

    } else if (counter > x.text) {
        lostCounter++;
        $("#losses").html(lostCounter);
        gameRunning = false;
        alert("You lose!!");
    }

});

