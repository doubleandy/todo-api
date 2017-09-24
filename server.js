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
})

app.listen(PORT, function(argument) {
  console.log('Express listening on port ' + PORT + '!');
})