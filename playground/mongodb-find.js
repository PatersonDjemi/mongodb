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
    db.collection('Todos').find({
        _id: new ObjectID('59e2547c1368695bc7575270')
    }).toArray().then(function (docs) {
        console.log("todos");
        console.log(JSON.stringify(docs, undefined, 2))
    }).catch(function (err) {
        console.log("unable to fetch todos", err);
    }) ;
*/

    // pour compter le nombre de document d une collection
  /*  db.collection('Todos').find().count().then(function (count) {
        console.log(`todos count ${count}`);
    }).catch(function (err) {
        console.log("unable to fetch todos", err);
    }) ;
*/

    // pour compter le nombre de document d une collection
    db.collection('User').find({name: 'Paterson'}).count().then(function (count) {
        console.log(`User Count count ${count}`);
    }).catch(function (err) {
        console.log("unable to fetch todos", err);
    }) ;


    // closer de connection
    //db.close();
} );


// pour faire une recherche bien precise on spécifit notre filtre dans la methode de recherche- find par exp
// pour chercher avec l _id on utilise le constructeur ObjetID donné par mongodb