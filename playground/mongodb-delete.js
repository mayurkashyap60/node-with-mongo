const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');

  // deletemany
  // db.collection('Users').deleteMany({name: 'Martin'}).then((result) => {
    //   console.log(result);
    // });


  // deleteONe
  // db.collection('Users').deleteOne({name: 'John'}).then((result) => {
    //   console.log(result);
    // });


  //findONeandDelete
  db.collection('Users').findOneAndDelete({age: 32}).then((result) => {
    console.log(result);
  });

  // client.close();
});
