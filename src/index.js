window.onload = function () {

	function createDomElement(element) {
		return document.createElement(element);
	}

	function append(parent, element) {
		parent.appendChild(element);
	}

	function create(element, id) {
		element.classList.add(id);
		return element;
	}

	function check(element) {
		if (element == null) return null;
		element.parentNode.removeChild(element);
	}
	//create dom elements
	append(document.body, create(createDomElement("input"), 'first'));
	append(document.body, create(createDomElement("input"), 'second'));
	append(document.body, create(createDomElement("button"), 'button'));


	document.querySelector('button').innerHTML = 'Calculate';
	//realize message-error
	document.querySelector('button').addEventListener('click', buttonHandler); 
	
	function buttonHandler() {
		let firstValue = document.querySelector('.first').value;
		let secondValue = document.querySelector('.second').value;
		let firstNode = document.querySelector('.first');
		let secondNode = document.querySelector('.second');

		check(document.querySelectorAll('.message-error')[0]);
		check(document.querySelectorAll('.message-error')[0]);
		check(document.querySelectorAll('.result')[0]);

		if (!(/^\d*(\.)*(\-)?\d*?$/.test(firstValue))) {
			append(document.body, create(createDomElement("div"), 'message-error'));
			let error1 = document.querySelectorAll('.message-error')[0];
			document.body.insertBefore(error1, firstNode.nextSibling);
			document.querySelectorAll('.message-error')[0].innerHTML = ' this is not a number ';
		}

		if (!(/^\d*(\.)*(\-)?\d*?$/.test(secondValue))) {
			append(document.body, create(createDomElement("div"), 'message-error'));
			let error2 = document.querySelectorAll('.message-error')[document.querySelectorAll('.message-error').length - 1];
			document.body.insertBefore(error2, secondNode.nextSibling);
			document.querySelectorAll('.message-error')[document.querySelectorAll('.message-error').length - 1].innerHTML = ' this is not a number ';
		}

		if (/^\d*(\.)*(\-)?\d*?$/.test(firstValue) && /^\d*(\.)*(\-)?\d*?$/.test(secondValue)) {
			append(document.body, create(createDomElement('div'), 'result'));
			document.querySelectorAll('.result')[0].innerHTML = (Number(firstValue) + Number(secondValue));
		}
	}
}