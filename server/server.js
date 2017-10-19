//libraties import
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require("mongodb");
var _ = require('lodash');


//local imports
var {mongoose} = require('./db/mongoose');
var Todo = require('./models/todo');
var User = require('./models/user');
var authenticate = require('./middelware/authenticate');


var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.json()); // take a middelware and make it available to express


app.post('/todos', (req, res) => {
    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then( doc => {
        var todo = JSON.stringify(doc, undefined, 2);
        console.log("saved the todo from the user", todo);
        res.status(200).send(todo);
    }).catch( err => {
        console.log("unable to save the todo");
        res.status(404).send(err);
    });

});

app.get('/todos', (req, res) => {
   Todo.find().then(todos => {
       res.status(200).send({todos}); // en mettant todos en tant que objet, ca fait que notre response todos sera contenu ds un objet, ds le cas contraire on obtient un array à la fin
    }).catch(err => {
        res.status(400).send(e);
});
});

app.get('/todos/:id', (req, res) => {
   var id = req.params.id;

   if (!ObjectID.isValid(id)) {
       return res.status(404).send("");
   }

   Todo.findById(id).then(todo => {
       if (!todo) {
           return res.status(404).send("");
        }

        res.status(200).send({todo});
   }).catch(err => res.status(404).send(""));

});


app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        console.log("this id is not valid");
        return res.status(404).send("");
    }

    Todo.findByIdAndRemove(id).then(todo => {

        if (!todo) {
            console.log("we didn't find your todo");
            return res.status(404).send("");
        }

        return res.status(200).send({todo});

    }).catch(err => res.status(404).send(""));

});

app.patch('/todos/:id', (req, res) => {

   var id = req.params.id; // pour l url

   var body = _.pick(req.body, ["text", "completed"]); // pick prend un objet avec des propriétés et retourne un objet avec les propriétes qu on veut
    console.log(body);
    if (!ObjectID.isValid(id)) {
        console.log("this id is not valid");
        return res.status(404).send("");
    }


    var bool= _.isBoolean(body.completed);


    if ( bool && body.completed) {

        body.completedAt = new Date().getTime();
    } else {

        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
        if (!todo) {
            return res.status(404).send("");
        }
         res.status(200).send({todo});
    }).catch(err => res.status(400).send(""));

});


//post users
app.post('/users', (req, res) => {

    let body = _.pick(req.body, ["email", "password"]);

    /*
    let user = new User({
        email: body.email,
        password: body.password
    });
    */
    let user = new User(body);

    user.save().then(() => {

        console.log("saved user : ", user);
        return user.generateAuthToken();

        // res.status(200).send(user);

    }).then(token => {
        //x-auth pour les headers personnalisés
        res.header('x-auth', token).send(user);

    }).catch(err => {

        console.log("unable to save the user");
        res.status(400).send(err);
    });

});



app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});



app.listen(port, (req, res) =>  {
    console.log(`server is now available on port ${port}`);
});





/*



// ici on cree notre premier Todos qui est une instance de notre model
var newTdo = new Todo({
    text: "Cook dinner"
});

var myTodo = new Todo({
    text: "Master Javascript",
    completed: false,
    completedAt: 11
});

var user = new User({
    email: "djemipaterson@yahoo.fr"
});

// cette action permet de sauvegarder notre todos cree plus haut

newTdo.save().then( (doc) => {
    var newTdo = JSON.stringify(doc, undefined, 2);
    console.log("saved todo ", newTdo);
}).catch(err => {
    console.log("unable to save todo");
});


myTodo.save().then(doc => {
    var myTodo = JSON.stringify(doc, undefined, 2);
    console.log("saved my todo ", myTodo);
}).catch(err => {
    console.log("Unable to save my todo");
});

user.save().then(doc => {
    var user = JSON.stringify(doc, undefined, 2);
    console.log("saved user data: ", user);
}).catch(err => {
    console.log("Unable to save user");
})

*/