//generate array of objects using Math.random()
var fname = Array('sam', 'thomas', 'sara');
var las = Array('walton', 'edison', 'hadley');
var sal = Array('10000', '14000', '15000');
var first = fname[Math.floor(Math.random() * fname.length)];
var last = las[Math.floor(Math.random() * las.length)];
var salary = sal[Math.floor(Math.random() * sal.length)];

var objA = [];
var objB = {};

function genobj(number) {
    for (var i = 0; i <= number; i++) {
        objB = {
            firstname: fname[Math.floor(Math.random() * fname.length)],
            lastname: las[Math.floor(Math.random() * las.length)],
            salaries: sal[Math.floor(Math.random() * sal.length)]
        };
        objA.push(objB);
    }
    console.log(objA);
}
genobj(5);
/*
[ { firstname: 'sara', lastname: 'hadley', salaries: '14000' },
  { firstname: 'thomas', lastname: 'edison', salaries: '14000' },
  { firstname: 'thomas', lastname: 'hadley', salaries: '15000' },
  { firstname: 'thomas', lastname: 'edison', salaries: '15000' },
  { firstname: 'sara', lastname: 'walton', salaries: '15000' },
  { firstname: 'thomas', lastname: 'edison', salaries: '10000' } ]
*/