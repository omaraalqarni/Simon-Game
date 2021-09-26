var gamePattern = [];
var colorsPick = ["red","green","blue","yellow"];
var randomColorChosen = colorsPick[sequence()];
gamePattern.push(randomColorChosen);
var colorWithClass = "#"+randomColorChosen;

$(colorWithClass).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

$("button").click(function () {
    console.log(click);
})



function sequence() {
    var random = Math.floor(Math.random() *4);
    console.log(random);
    return random;
}