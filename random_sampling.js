var u_ = require("underscore");

var items = ['a','b','c','d','b','a'];

for (var i=0; i<10; i++) {
	console.log(u_.sample(items, 3));
}

/* 
[ 'c', 'b', 'd' ]
[ 'b', 'c', 'a' ]
[ 'a', 'b', 'b' ]
[ 'c', 'a', 'a' ]
[ 'b', 'a', 'c' ]
[ 'b', 'b', 'a' ]
[ 'a', 'c', 'b' ]
[ 'c', 'a', 'd' ]
[ 'b', 'a', 'a' ]
[ 'c', 'd', 'a' ] 
*/
