// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    // made this a return statement so the rest of the function does not run if there's an error. Skips the need for an else clause
    return console.log(`Unable to connect because of ${err}`);
  }
  console.log('MongoDB Connection Successful');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log('All records deleted', result);
  // });



  //deleteOne

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });



  //findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //challenge: delete all docs in User collection where name = "Carlton", findOneAndDelete another doc in User collection...delete thsi one by id

  db.collection('Users').deleteMany({name: 'Carlton'}).then((result) => {
    console.log('Deleted all instances of Carlton');
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b045218ac57ccb4be6516a4')}).then((result) => {
    console.log('Deleted record with id 5b045218ac57ccb4be6516a4');
  })



  client.close();
});
