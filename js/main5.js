(function () {
	'use strict'

	var x=0;

	(true) ? console.log('true') : console.log('false');

	if (undefined) {
		console.log('this is true');
	}
	else if (x === 0) {
		console.log('the value of x is 2');
	}
	else {
		console.log('this is false');
	}
}());