//GET
 cupl api/http
 curl http://localhost:3000/posts/
 [
  {
    "id": 10,
    "title": "json-server",
    "author": "typicode"
  },
  
]


//POST
curl --data "id=20&title=value2&author=abc" http://localhost:3000/posts/

[
  {
    "id": 10,
    "title": "json-server",
    "author": "typicode"
  },
  {
    "id": 20,
    "title": "value",
    "author": "abc"
  }
]

//PUT
curl -X PUT  -F "id=20&title=alpf" http://localhost:3000/posts/20
[
  {
    "id": 10,
    "title": "json-server",
    "author": "typicode"
  },
  {
    "id": 20,
    "title": "alpf",
    "author": "abc"
  }
]
//delete
curl -X DELETE http://localhost:3000/posts/20
[
  {
    "id": 10,
    "title": "json-server",
    "author": "typicode"
  }]

