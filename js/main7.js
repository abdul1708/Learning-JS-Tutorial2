(function () {
	'use strict'

	function test(){
		console.log('set time out function');
	}

	setTimeout(test,1000);

	var counter = 0;
	var setIntervalId = setInterval(function () {
		counter += 1;
		console.log('tik tok');
		if (counter === 5) {
			console.log('the set interval');
			clearInterval(setIntervalId);
		}
	},1000);
}());
