// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
// ObjectID me permet de creer des ID on the fly


// alors adresse de la base, port sur lequel on listen, ensuite le nom de la base de donnée....
MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDb server');
/*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, function (err, result) {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */
/*
    db.collection('User').insertOne({
        name: 'Paterson',
        age: 24,
        location: 'Nürnberg'
    }, function (err, result) {
        if (err) {
            return console.log('Unable to insert User', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));


        // result.ops renvoit un tableau contenant tous les documents de ma collections
        const stamp = result.ops[0]._id.getTimestamp();
        console.log(' temps de creation ', stamp);
   });
*/
    // closer de connection
    db.close();
} );