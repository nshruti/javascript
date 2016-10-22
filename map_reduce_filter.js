//map
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(doubles); //[ 2, 8, 18 ]

//reduce
var sum_all = numbers.reduce(function(num1,num2){
 return num1+ num2
})
console.log(sum_all); //14

//filter
var is_odd = numbers.filter(function(num) {
 return num % 2 == 1
})
console.log(is_odd); //[1,9]

// Chaining all 3 methods used above (functional programming)
numbers = [1,2,3,4,5,6,7]
var is_odd_square = numbers.filter(function(num) {
 return num % 2 ==1
}).map(function(n){
 return Math.pow(n,2)
}).reduce(function(n1,n2){
 return n1+ n2;
}) //84"
