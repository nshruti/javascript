//install npm packages request,frisby
//node-jasmine [filename]_spec.js
//request gets http response,frisby checks for response ,format n checks whether value is present or not


var request = require('request');
var frisby = require('frisby');

request.get({
    headers: { 'content-type': 'application/json' },
    url: 'http://localhost:3000/posts/'
}, function(error, response, body) {
    console.log(body);
}
);

request.post({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost:3000/posts/',
    body: "id=10002&title=hell&author=boy"
}, function(error, response, body) {
	if (error) {
		console.log(error);
	}
    console.log(body);
});

request.put({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost:3000/posts/10002',
    body: "id=10002&title=hellllll&author=boy"
}, function(error, response, body) {
    console.log(body);
});

request.delete({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost:3000/posts/10002',
}, function(error, response, body) {
    console.log(body);
});

frisby.create('simple test')
    .get('http://localhost:3000/posts/')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .toss()//checks the status and content-type

frisby.create('final test')
    .get('http://localhost:3000/posts/')
    .expectJSON('?', {
        "id": "1001",
        "title": "hellll",
        "author": "boy"//checks does id with value 1001 has title n author as mentioned
    })
    .toss()
