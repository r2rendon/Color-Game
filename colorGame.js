var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", 
"rgb(0, 0, 255)", "rgb(255, 0, 255)"];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

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
            alert("you clicked the right color");
        }
        else{
            alert("Wrong");
        }
    });
}
