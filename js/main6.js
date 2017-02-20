(function () {
	'use strict'

	var newArray = ['item1','item2','item3'];

	var lengthOfArray = newArray.length;
	for (var count = 0; count < lengthOfArray; count++) {
		console.log(newArray[count]);	
	}

	var newObject = {
		'property1': 'value1',
		'property2': 'value2',
		'property3': 'value3'
	}

	for (var prop in newObject){
		console.log(newObject[prop]);
	}
	
}());