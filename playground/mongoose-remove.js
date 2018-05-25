const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) - removes multiple records, based on the query criteria. Running it with an empty object will remove all docs in that collection

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findeOneAndRemove - will find the first doc by whatever criteria is provided in the query object


// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b084af0e6762cab2dd0e96d').then((todo) => {
  console.log(todo);
});
