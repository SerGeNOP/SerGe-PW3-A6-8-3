let progressBarCounter = 0;
let strWidth = "";
function drawProgress() {
	if (progressBarCounter > 100) { progressBarCounter = 100; };
	strWidth = progressBarCounter +'%';
	$("#my-progress-bar").width(strWidth);
}

function upToOne () {
		progressBarCounter += 1;
		drawProgress();
	}

function upToThree () {
		progressBarCounter += 3;
		drawProgress();
	}

function upToSeven () {
		progressBarCounter += 7;
		drawProgress();
	}

function resetAllBtn () { 
	progressBarCounter = 0;
	drawProgress();
 }

function init() {
	$("#1_btn").click(upToOne);
	$("#3_btn").click(upToThree);
	$("#7_btn").click(upToSeven);
	$("#reset_btn").click(resetAllBtn);

}

$(document).ready(init);