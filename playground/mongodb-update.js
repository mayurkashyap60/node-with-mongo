const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5f437b2fd3af4f23f002d800')
  }, {
    $set: {
      completed: false
    }
  }, {
    returnOriginal: true
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
