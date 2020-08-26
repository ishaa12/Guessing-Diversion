var numSquares = 9;
var colors  =  []; 
var pickedcolor; 

var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setupModeButtons();
	setupSquares();
	reset();

}


function setupModeButtons(){

	for (var i = 0; i <  modeButtons.length; i++) {

    	modeButtons[i].addEventListener("click",function(){

    		modeButtons[0].classList.remove("selected");
    		modeButtons[1].classList.remove("selected");
    		modeButtons[2].classList.remove("selected");

    		this.classList.add("selected");
    		if(this.textContent === "Easy"){
    			numSquares = 3 ;
    		}
    		else if(this.textContent === "Medium"){
    			numSquares = 6;
    		}
    		else{
    			numSquares = 9;
    		}

    		reset();
   		 });
	}
}

function setupSquares(){

	for(var i = 0 ; i < squares.length ; i++){

		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){

		var clickedcolor = this.style.background;

		if(clickedcolor === pickedcolor){

	  		message.textContent = "Correct!";
	  		resetButton.textContent = "Play Again?";
	  		changeColor(clickedcolor);
	  		h1.style.background = clickedcolor;

	  	}
	  	else{
	  		this.style.background = "#232323";
	  		resetButton.textContent = "New Colors";
	  		message.textContent = "Try Again!!";
	  	}

	});
}

} 



function reset(){

	colors = generateColors(numSquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	message.textContent = "";
	this.textContent = "New Colors";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
	    }
	    else{
	    	squares[i].style.display = "none";
	    }
	}
	h1.style.background = "black";
}

resetButton.addEventListener("click",function(){
	reset();
 });


colordisplay.textContent = pickedcolor; 

for(var i = 0 ; i < squares.length ; i++){

	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){

	var clickedcolor = this.style.background;

	if(clickedcolor === pickedcolor){

	  	message.textContent = "Correct!";
	  	resetButton.textContent = "Play Again?";
	  	changeColor(clickedcolor);
	  	h1.style.background = clickedcolor;

	  }
	  else{
	  	this.style.background = "#232323";
	  	resetButton.textContent = "New Colors";
	  	message.textContent = "Try Again!!";
	  }

	});
}


function changeColor(clickedcolor){
	for( var i = 0 ; i < squares.length ; i++){
		squares[i].style.background = clickedcolor;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColors(num){

	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());	
	}
	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);
	

	return "rgb(" + r + ", " + g + ", "+ b + ")";
	

}