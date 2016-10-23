var u_ = require("underscore");

var items = ['a','b','c','d','b','a'];

for (var i=0; i<10; i++) {
	console.log(u_.sample(items, 3));
}