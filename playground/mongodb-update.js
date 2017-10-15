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
        db.collection("Todos").findOneAndUpdate({
            _id: new ObjectID("59e25226e86d081eb94f06c2")
        },
        { $set : {
            completed: true
        }},
        { returnOriginal: false}
        ).then(result => {
            console.log(result);
        });
  */

        db.collection("User").findOneAndUpdate({
            _id: new ObjectID("59e348bf64674d5b00859a3a")
        },
        {
        $set: {
            name: "Paterson"
            },
        $inc: {
            age: 1
        }
        },
        {
            returnOriginal: false
        }).then(result => {
            console.log(result);
        });

    // closer de connection
    //db.close();
} );


// findOneAndUpdate prend 3 args: le filtre, le truc à update, options (facultatif), callback(facultatif)
// si on ne passe pas un callback alors ca nous retourne un promise
// returnOrginal set to false fait en sorte qu on nous retourne le document updated
// toutes les operations de update se passe ds le 2e argument