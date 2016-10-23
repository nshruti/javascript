// read csv file and create array of objects 
// find the total salary where salary > 100000
// find average salary for those numbers

var fs = require('fs');
var array = fs.readFileSync('1data.csv').toString().trim().split("\n"); //trim required to remove empty lines in the end of the file

var data_obj = [];
var emp_count = 0;
var total_salary = 0;

for (var i in array) {
    var splitted = array[i].split('|');
    data_obj.push({
        first: splitted[0],
        last: splitted[1],
        salary: parseInt(splitted[2])
    });
}

for (var counter = 0; counter < data_obj.length; counter++) {
    if (data_obj[counter].salary >= 100000) {
        total_salary = total_salary + data_obj[counter].salary;
        emp_count++;
    }
}

console.log("Number of people earning more than 100000 is " + emp_count);
console.log('Total salary of above ' + emp_count + ' people is ' + total_salary);
console.log("Average salary of people earning > 100000 is " + total_salary / emp_count);

// Number of people earning more than 100000 is 500
// Total salary of above 500 people is 50124750
// Average salary of people earning > 100000 is 100249.5
