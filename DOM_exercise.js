//DOM Exercise 
//July 10,2014


window.onload = function() {

var lastClicked = document.getElementById("last_clicked");
var previouslyClicked = document.getElementById("previously_clicked");
var currentlyClicked = 0;


// // 1.) Listen for a click on the div_1 id 
// // and alert with the innerHTML of the count id div.

// 	var divOne = document.getElementById("div_1");
// 	divOne.onclick = function () {
// 		alert(divOne.innerHTML);
// 	}



// // 2.) Listen for a click on 
// // the div_1 id and update thecount div's innerHTML count.

// var divOne = document.getElementById("div_1");
// divOne.onclick = function () {
// 	divOne.innerHTML ++;
// }



// // 3.) Listen for a click on div_1 through div_5 and each time something 
// // is clicked update the last_clicked element with the content from 
// // the div that was clicked.

// var setClickOnDiv = function(id) {
//   var element = document.getElementById(id);
//   element.onclick = function(){
//     lastClicked.innerHTML = element.innerHTML;
//   }
// }; 
// setClickOnDiv("div_1");
// setClickOnDiv("div_2");
// setClickOnDiv("div_3");
// setClickOnDiv("div_4");
// setClickOnDiv("div_5");



// // 4.) Listen for a click on div_1 through div_5 and each time something is 
// // clicked update the last_clicked element with the content from the div 
// // that was clicked, and take the old last clicked to update the 
// // previously_clicked

// var setClickOnDiv = function(id) {
// 	var element = document.getElementById(id);
// 		element.onclick = function(event) {
//   	previouslyClicked.innerHTML = lastClicked.innerHTML;
//   	lastClicked.innerHTML = element.innerHTML;
// 	}
// }

// setClickOnDiv("div_1");
// setClickOnDiv("div_2");
// setClickOnDiv("div_3");
// setClickOnDiv("div_4");
// setClickOnDiv("div_5");






// // 5.) Listen for a click on div_1 through div_5 and each time something 
// // is clicked change its color to blue element with the content from 
// // the div. On each click update the previously_clicked element with 
// // content from the previously clicked element.

// var setClickOnDiv = function(id) {
// 	var element = document.getElementById(id);
// 	element.onclick = function () {
// 		previouslyClicked.innerHTML = element.innerHTML;
// 		element.style.color = "blue";
// 	}
// }

// setClickOnDiv("div_1");
// setClickOnDiv("div_2");
// setClickOnDiv("div_3");
// setClickOnDiv("div_4");
// setClickOnDiv("div_5");






// // 6.) Building off the last example, listen for a click on the previously_clicked 
// // element. When clicked, make the currentlyClicked div have a white 
// // backgroundColor and use the number it's displaying to change the 
// // respective div to have background color blue.

// var prevElement = 0;

// var setClickOnDiv = function(id) {
// 	var element = document.getElementById(id);
// 	element.onclick = function () {
// 		previouslyClicked.innerHTML = lastClicked.innerHTML;
// 		lastClicked.innerHTML = element.innerHTML;
// 		element.style.color = "blue";
// 		//Use if else to check if element has been called,
// 		//if called, change back to black.
// 		if(prevElement) {
// 			prevElement.style.color="black";
// 		}
// 		prevElement = element;
// 	}
// }



// setClickOnDiv("div_1");
// setClickOnDiv("div_2");
// setClickOnDiv("div_3");
// setClickOnDiv("div_4");
// setClickOnDiv("div_5");





}