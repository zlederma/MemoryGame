
let arrayID;
let arrayIDList = new Array();
let resetGame = false;

//this variable will tell when click events should be disabled
let colorsGoing = false;
let stopLightingUp = false;

//Shows how long the arrayIDList is
let roundNum = 0;
let roundIndicator = 0;

let boxes = document.querySelectorAll(".box");
let top_left_box =document.querySelector("#top_left_box");
let top_right_box =document.querySelector("#top_right_box");
let bottom_left_box =document.querySelector("#bottom_left_box");
let bottom_right_box =document.querySelector("#bottom_right_box");

let count = document.querySelector("#count");
// let intCount = 0;

let start_button = document.querySelector("#start_button");



//red, blue, green, yellow
let boxArray = [top_left_box, top_right_box, bottom_left_box, bottom_right_box];
let initialColors = ["rgb(198,2,5)", "rgb(10,1,171)", "rgb(1,150,61)", "rgb(177, 129, 1)"];  
let lightUpColors = ["rgb(225,1,5)", "rgb(14,1,225)", "rgb(1,255,103)", "rgb(255,187,1)"];


// start_button.addEventListener("click", chooseLightRandomBox);

start_button.addEventListener("click", chooseLightRandomBox);
start_button.addEventListener("click", restartGameIfStartClicked);


boxArray[0].addEventListener("click", redClick);
boxArray[1].addEventListener("click", blueClick);
boxArray[2].addEventListener("click", greenClick);
boxArray[3].addEventListener("click", yellowClick);


function print(){
	console.log("this is the arrayIDList: " + arrayIDList);
	console.log("this is the roundNum: " + roundNum);
	console.log("this is the roundIndicator: " + roundIndicator);
}



function reset(){
	arrayIDList = new Array();
	roundNum = 0;
	roundIndicator = 0;
	count.innerHTML = roundNum;
}

function restartGameIfStartClicked (){
	if(roundNum > 1){
		stopLightingUp = true;
		reset();
			setTimeout(function() {
		stopLightingUp = false;
	}, 2000);
	}
}

function redClick(){
	if(colorsGoing){
		return;
	}

	if(arrayIDList[roundIndicator]==0){
		count.innerHTML = roundNum;
		roundIndicator += 1;
		lightClickedBox(0);
		print();
		if(roundIndicator == roundNum){
			waitAndSetNextRound();
		}
	}

	else{

	setTimeout(function() {
		reset();
	}, 2000);
		count.innerHTML = "good luck next time";
	}
}

function blueClick(){
	if(arrayIDList[roundIndicator]==1){
		count.innerHTML = roundNum;
		roundIndicator += 1;
		lightClickedBox(1);
		print();
		if(roundIndicator == roundNum){
			waitAndSetNextRound();
		}

	}

	else{
	setTimeout(function() {
		reset();
	}, 2000);
		count.innerHTML = "good luck next time";
	}
}

function greenClick(){
	if(arrayIDList[roundIndicator]==2){
		count.innerHTML = roundNum;
		roundIndicator += 1;
		lightClickedBox(2);
		print();
		if(roundIndicator == roundNum){
			waitAndSetNextRound();
		}

	}

	else{
	setTimeout(function() {
		reset();
	}, 2000);
		count.innerHTML = "good luck next time";
	}
}

function yellowClick(){
	if(arrayIDList[roundIndicator]==3){
		count.innerHTML = roundNum;
		roundIndicator += 1;
		lightClickedBox(3);
		print();
		if(roundIndicator == roundNum){
			waitAndSetNextRound();
		}

	}

	else{
	setTimeout(function() {
		reset();
	}, 2000);
		count.innerHTML = "good luck next time";
	}
}


//returns an int from 0 to the highestNum (exclusive)
function randomInt(highestNum){
	return Math.floor(Math.random() * highestNum);
}


//randomly chooses one of the 4 boxes, and then changes its color respectively.
//returns the int arrayID
function chooseLightRandomBox(){

	arrayID = randomInt(4);
	boxArray[arrayID].style.backgroundColor = lightUpColors[arrayID];
	setTimeout(function() {
		boxArray[arrayID].style.backgroundColor = initialColors[arrayID];
	}, 1000);

	arrayIDList.push(arrayID);

	roundNum += 1;
}

function lightSameBox(num){
	if(stopLightingUp){
		return;
	}
	boxArray[num].style.backgroundColor = lightUpColors[num];
	setTimeout(function() {
		boxArray[num].style.backgroundColor = initialColors[num];
	}, 1000);
}


function lightAllBoxes(){
	for(let i = 0; i < arrayIDList.length; i++){
	  	setTimeout(function() {
			lightSameBox(arrayIDList[i]);
		}, 2000 * i);
	}
}


function waitAndSetNextRound(){

	colorsGoing = true;
	console.log("this is colorsGoing: " + colorsGoing);

	roundIndicator = 0;

	setTimeout(function() {
		lightAllBoxes();
	}, 2000);

	setTimeout(function() {
		chooseLightRandomBox();
	}, 2000 * (roundNum + 1));

	setTimeout(function() {
		colorsGoing = false;
		console.log("this is colorsGoing: " + colorsGoing);
	}, 2000 * (roundNum + 1.7));


}

function lightClickedBox(num){
		boxArray[num].style.backgroundColor = lightUpColors[num];
	setTimeout(function() {
		boxArray[num].style.backgroundColor = initialColors[num];
	}, 200);
}


