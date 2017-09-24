var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var nextTodoId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Todo API Root');
});

app.get('/todos', function(req, res) {
  res.json(todos);
});

app.get('/todos/:id', function(req, res) {
  var matchedTodoId;
  var todoId = parseInt(req.params.id, 10);

  for(i = 0; i < todos.length; i++) {
    if (todoId === todos[i].id) {
      matchedTodoId = todos[i];
    }
  }

  if (matchedTodoId) {
    res.json(matchedTodoId);
  } else {
    res.status(404).send();
  }

});

app.post('/todos', function (req, res) {
  var body = req.body;
  body.id = nextTodoId++;
  todos.push(body);
  res.json(body);
})

app.listen(PORT, function(argument) {
  console.log('Express listening on port ' + PORT + '!');
});