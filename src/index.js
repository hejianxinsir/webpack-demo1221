import j from 'jquery';
import _ from 'lodash';
import foo from './foo.js';

function component() {
	const element = j('<div></div>');

	element.html(_.join(['Hello','Webpackkk'],' '))

	return element.get(0);
}

document.body.appendChild(component());
console.log(foo);
console.log(foo());
