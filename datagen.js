// Step 1) Use faker package to generate firstname, lastname, random salaries.
// Step 2) Use ya-csv and fs module to generate csv file (use append mode by { 'flags': 'a' }).
// step 3) usage "node datagen.js 400". If no value is given, default 100 is assumed.

var faker = require('Faker');
var csv = require('ya-csv');
var fs = require('fs');

var n = process.argv[2] || 100; // default value
var writer = csv.createCsvStreamWriter(fs.createWriteStream('datagen_output.csv', { 'flags': 'a' })); //append mode

writer.writeRecord(['first', 'last', 'salary'])
for (var i = 0; i < n; i++) {
    writer.writeRecord([faker.Name.firstName(), faker.Name.lastName(), faker.random.number(200) * 1000]);
}

console.log('datagen_output.csv ' + "generated at: \n" + __dirname);