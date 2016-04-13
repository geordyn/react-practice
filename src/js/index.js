import React from 'react';
import ReactDOM from 'react-dom';

import '../style/index.scss'; //when naming things for styling use className="jfkds"

import AddToDo from './components/AddToDo'; //needs to start with capital letter
// import Test from './components/Test';

document.addEventListener(`DOMContentLoaded`, () => { //tell me when the DOM has loaded, takes in anon function

//grabbing the element on index.html
	let reactNode = document.getElementById(`react-node`);

//double checks to make sure that react node actually rendered
	if ( reactNode ) {
		ReactDOM.render( //if it does exist, render is going to take in to args:
			<AddToDo />//what you want to place on the selected element, could be plain html for test, or a file
		, reactNode ); //selected element
	}
//sometimes .js wont be used for files .jsx instead.
//jsx is the hardest part to get used to for developers. unholy as fuck bc html templates in your JS
//logic for that view is all in one file. in angular, its usually split into two: view and ctrl
//but it doesnt need to be. #goReact








	//end event listener
});
