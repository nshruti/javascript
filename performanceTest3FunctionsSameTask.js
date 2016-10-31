// Performance test 3 different ways of checking if a number is int or float

var iterations = 100000000;

function functionOne(n) {
return (n == parseInt(n));
}

function functionTwo(n) {
return (n % 1 == 0);
}

function functionThree(n) {
return (n | 0) === n;
}

console.time('Function #1');
for(var i = 0; i < iterations; i++ ){
    functionOne(10.1);
};
console.timeEnd('Function #1')

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
    functionTwo(10.1);
};
console.timeEnd('Function #2')

console.time('Function #3');
for(var i = 0; i < iterations; i++ ){
    functionThree(10.1);
};
console.timeEnd('Function #3')

// Function #1: 1439ms
// Function #2: 116ms
// Function #3: 69ms