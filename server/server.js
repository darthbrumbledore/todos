const express = require('express'); // express back end for routing and requests
const bodyParser = require('body-parser'); // parses POST requests to JSON
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// set port to the env variable from Heroku, or 3000...whichever is available in our env
const port = process.env.PORT || 3000;

// configure middleware...body-parser in this case

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

  // GET request to /todos/id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(400).send();
    }

    res.send({todo: todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.delete('/todos/:id', (req, res) => {
  // get the id from the params
  // validate the id -> not valid, return a 404
  // remove it with findByIdAndRemove
    // success
      //if no doc, 404
      //if doc, send doc back
    // error
      // 400 with empty body
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  }).catch((e) => {
    res.status(400).send();
  })

})

// Server listener
app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
