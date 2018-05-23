// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    // made this a return statement so the rest of the function does not run if there's an error. Skips the need for an else clause
    return console.log(`Unable to connect because of ${err}`);
  }
  console.log('MongoDB Connection Successful');
  const db = client.db('TodoApp');

  // findOneAndUpdate

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b04cff8e6762cab2dd093e9')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result => {
  //   console.log(result);
  // }));

  // db.collection('Users').findOneAndUpdate({
  //   name: 'Bob'
  // }, {
  //   $set: {
  //     name: 'Carlton'
  //   }
  // },
  // { returnOriginal: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Carlton'
  }, {
    $inc: {
      age: 1
    }
  },
  { returnOriginal: false}).then((result) => {
    console.log(result);
  });



  client.close();
});
