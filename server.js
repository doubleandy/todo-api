var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

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
  var todoId = parseInt(req.params.id, 10);
  var matchedTodoId = _.findWhere(todos, {id: todoId});

  if (matchedTodoId) {
    res.json(matchedTodoId);
  } else {
    res.status(404).send();
  }

});

app.post('/todos', function (req, res) {
  var body = _.pick(req.body, 'description', 'completed');


  if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
    res.status(400).send();
    return;
  }

  body.description = body.description.trim();
  body.id = nextTodoId++;
  todos.push(body);
  res.json(body);
})

app.listen(PORT, function(argument) {
  console.log('Express listening on port ' + PORT + '!');
});