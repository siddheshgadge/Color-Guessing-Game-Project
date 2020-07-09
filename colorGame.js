var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var DisplayRgb = document.getElementById("DisplayRgb");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector(".messageDisplay");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");
init();
function init(){
	setUpLevels();
	setUpSquares();
	reset();
}
function setUpLevels(){
	for(var i=0;i<modeBtn.length;i++){
		modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		modeBtn[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numSquares=3;
		}
		else if(this.textContent==="Medium"){
			numSquares=6;
		}
		else{
			numSquares=9;
		}
		reset();
	});
}
}
function setUpSquares(){
for(var i=0;i<squares.length;i++){
	//click listener for squares
	squares[i].addEventListener("click",function(){
		//extracting square color
		var clickedColor = this.style.background;
		//Comapring with selected color
		if(clickedColor === pickedColor){
			changeColor(clickedColor);
			resetButton.textContent = "Play Again?";
			messageDisplay.classList.add("messageDisplay");
			messageDisplay.textContent = "correct!";
		}
		else{
			this.style.background = "#232323";
			messageDisplay.classList.add("messageDisplay");
			messageDisplay.textContent = "Try Again!";
		}
	});
};
}
function reset(){
	//Generating random colors
	resetButton.textContent = "New Color";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	//Displaying picked color
	DisplayRgb.textContent = pickedColor;
	//changing colors of all squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background= colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	//changing h1
	h1.style.background="steelblue";
	messageDisplay.textContent = "";
}
/*//easy button event
easyBtn.addEventListener("click",function(){
	numSquares =3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background= colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
});
//hard button event
hardBtn.addEventListener("click",function(){
	numSquares =6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	for(var i=0;i<squares.length;i++){
		squares[i].style.background= colors[i];
		squares[i].style.display = "block";
	}
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
});*/
//Reset Event
resetButton.addEventListener("click",function(){
	reset();
});

//color changing function after correct guess
function changeColor(clickedColor){
	squares.forEach(function(square){
			square.style.background = clickedColor;
	});
	h1.style.background = clickedColor;
}
//picking color randomly
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//Generating random colors
function generateRandomColors(num){
	var arr = []
	//repeat for num times
	for(var i = 0; i<num;i++){
		//generating random colors and pushing to the array
		arr.push(randomColor());
	}
	//return created array
	return arr;
}
//Generating random color
function randomColor(){
	//generating random value between 0-255
	var r = Math.floor(Math.random()*256);
	//generating random value between 0-255
	var g = Math.floor(Math.random()*256);
	//generating random value between 0-255
	var b = Math.floor(Math.random()*256);
	//returning random color
	return "rgb("+r+", "+g+", "+b+")";
}