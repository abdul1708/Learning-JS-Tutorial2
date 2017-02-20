(function () {
	'use strict';

	var elementById=document.getElementById('test-id');
	var elementsByClassName=document.getElementsByClassName('col-md-6')[0];
	var elementsByTagName=document.getElementsByTagName('li');
	var elementsByName=document.getElementsByName('element-with-name');

	elementById.id='new-id';
	elementsByClassName.classList.add('adding-a-class');
	elementsByClassName.classList.remove('adding-a-class');
	//elementById.innerHTML='<p>this is innerHTML</p>';
	elementById.outerHTML='<p>this is outerHTML</p>';

	elementById.setAttribute('name','value');
	elementById.removeAttribute('name');
	console.log(elementById.hasAttribute('class'));
	//console.log(elementsByClassName.tagName);
	//console.log(elementsByTagName);
	//console.log(elementsByName);
}());