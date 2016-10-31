// Array Operations
var a = [1,2,'a'];
console.log(a.push('hello')); //prints 4 ie array length after inserting this
console.log(a) //[ 1, 2, 'a', 'hello' ]
a[3] = 'world';
console.log(a); //[ 1, 2, 'a', 'world' ]
console.log(a.pop()); //'world'
console.log(a);// [ 1, 2, 'a' ]
console.log(a.shift()); //1
console.log(a); // [ 2, 'a' ]
console.log(a.unshift('b','c')); // contains 4 ie length of a after doing unshift
console.log(a); //[ 'b', 'c', 2, 'a' ]
console.log(a.indexOf('c')); // 1
var a = [ 'b', 'c', 2, 'a', 'h', 'i' ]
console.log(a.push('h','i')); //8
console.log(a) //[ 'b', 'c', 2, 'a', 'h', 'i', 'h', 'i' ]
a.splice(2,3); //removes 3 elements from position 2 [ 'b', 'c', 'i', 'h', 'i' ]
console.log(a); //[ 'b', 'c', 'i', 'h', 'i' ]
a.splice(2,0,'d') // deletes 0 elements but inserts 'd' at position 2
console.log(a) //[ 'b', 'c', 'd', 'i', 'h', 'i' ]
console.log(a.reverse()); //[ 'i', 'h', 'i', 'd', 'c', 'b' ]

//JSON Handling
var animal='{"name":"cat"}';

console.log(typeof(animal)); //string
var animalO =JSON.parse(animal); 
console.log(typeof(animalO)); //object
console.log(animalO);  //{ name: 'cat' }
animalO.age=3;
console.log(animalO); //{ name: 'cat', age: 3 }
var animalA=JSON.stringify(animalO);
console.log(animalA); //{"name":"cat","age":3}
console.log(typeof(animalA)); //string
