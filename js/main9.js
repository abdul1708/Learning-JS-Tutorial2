(function () {
	'use strict'

	var myArray = [10,20,30];

/*
	myArray.splice(1,2,'hello','world');
	myArray.reverse();
	myArray.sort(function (a,b) {
		if (a>b) {
			return 1;
		} else if(a<b){
			return -1;
		} else{
			return 0;
		}
	});
*/

	//console.log(myArray.indexOf(3));
	//myArray.indexOf();
	function isLargeThanTen (value) {
		if (value>10) {
			return true;
		} else{
			return false;
		}
	}
	var filteredArray = myArray.filter(isLargeThanTen);
	console.log(filteredArray);
	console.log(myArray);
}());
