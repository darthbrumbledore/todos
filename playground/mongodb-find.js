// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    // made this a return statement so the rest of the function does not run if there's an error. Skips the need for an else clause
    return console.log(`Unable to connect because of ${err}`);
  }
  console.log('MongoDB Connection Successful');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b0439abb97572b19faf93b4')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'Carlton'
  }).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('unable to fetch users', err);
    })



  client.close();
});
