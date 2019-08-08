var numSquares = 6;

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("newColor");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function()
{
    hardBtn.classList.remove("selected");   
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
        
    }
})
hardBtn.addEventListener("click", function()
{
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");   
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

})

reset.addEventListener("click", function()
{
    //Generate new colors
    colors = generateRandomColors(numSquares);
    //Pick a random color
    pickedColor = pickColor();
    //Change colordisplay to math picked color
    colorDisplay.textContent = pickedColor;
    //Change squares
    for(var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = colors[i];

    reset.textContent = "New Color";
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";
});

for(var i = 0; i < squares.length; i++)
{
    //Add initial colors
    squares[i].style.backgroundColor = colors[i];

    //Click listeners
    squares[i].addEventListener("click", function()
    {
        //Grab the clicked color
        var clickedColor = this.style.backgroundColor;
        
        if(clickedColor === pickedColor)
        {
            message.textContent = "Correct!";
            reset.textContent = "PLAY AGAIN?"
            changeColors();
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again";
        }
    });
}

function changeColors(){
    //This functions is used when the user guesses the right color
    for(var i = 0; i < squares.length; i++)
    {
        if(squares[i].style.backgroundColor != "#232323")
            squares[i].style.backgroundColor = pickedColor;
    }

    h1.style.backgroundColor = pickedColor;

}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors(num){

    //Make an array
    var arr = [];

    //repeat num times
    for(var i = 0; i < num; i++)
        arr.push(randomColor());

    //Return the array
    return arr;

}

function randomColor()
{
    //Pick a red from 0 - 255
    var red = Math.floor(Math.random() * 256);
    //Pick a green from 0 - 255
    var green = Math.floor(Math.random() * 256);
    //Pick a blue from 0 - 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb("+red+", "+blue+", "+green+")";
}
