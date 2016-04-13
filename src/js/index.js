import React from 'react';
import ReactDOM from 'react-dom';

import '../style/index.scss';

import Test from './components/Test';

document.addEventListener(`DOMContentLoaded`, () => {
	let reactNode = document.getElementById(`react-node`);

	if ( reactNode ) {
		ReactDOM.render(
			<Test />
		, reactNode );
	}
});