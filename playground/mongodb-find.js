const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('5f437b2fd3af4f23f002d800')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('Unable to fetch data', err);
  // });


    // db.collection('Users').find().count().then((count) => {
    //   console.log(`Todos Count ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch data', err);
    // });

    db.collection('Users').find({name: 'John'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    })

  // client.close();
});
