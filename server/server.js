//libraties import
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require("mongodb");

//local imports
var {mongoose} = require('./db/mongoose');
var Todo = require('./models/todo');
var User = require('./models/user');


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