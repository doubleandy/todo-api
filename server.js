var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'Take out trash',
  completed: false
}, {
  id: 2,
  description: 'Go shopping',
  completed: false
}]

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

})

app.listen(PORT, function(argument) {
  console.log('Express listening on port ' + PORT + '!');
});