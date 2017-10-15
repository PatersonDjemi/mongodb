// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
// ObjectID me permet de creer des ID on the fly


// alors adresse de la base, port sur lequel on listen, ensuite le nom de la base de donnée....
MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDb server');
    
    // delete Many
/*0
    db.collection('Todos').deleteMany({text: "Eat lunch"}).then(function (result) {
        console.log(result);
    });

    // delete one
    db.collection('Todos').deleteOne({text: "Something to do"}).then(function (result) {
        console.log(result);
    });

    // findOneAndDelete give a document back ( in result ) favorite
    db.collection('Todos').findOneAndDelete({completed: false}).then(function (result) {
        console.log(result);
    });
  */

    // delete many users
 //   db.collection('User').deleteMany({name: "Paterson"}).then( result => {
   //     console.log(result);
   // });

    // delete with an id


    db.collection("User").deleteOne({location: "yaounde"}).then(result => {
       console.log(result);
    });

    // closer de connection
    //db.close();
} );

