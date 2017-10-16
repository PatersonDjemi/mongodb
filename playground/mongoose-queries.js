const {mongoose} = require("../server/db/mongoose");
const Todo = require("../server/models/todo");
const User = require("../server/models/user");
const {ObjectID} = require("mongodb");

var todoId = "59e35d845a04151b57d8dd33";
var userId = "59e35d845a04151b57d8dd35";

// l'objet ObjectID nous offre la methode isValid pour verifier si un id es valid

if (!ObjectID.isValid(todoId)){
    console.log("id not valid");
}





/*
// find retourne tous les documents correspondant à notre recherche
    Todo.find({
        _id:id
    }).then(todos => {
        console.log(todos);
    }).catch(err => {
        console.log(err);
});

// retourne juste un seul document(le premier) qui correspond à notre recherche
    Todo.findOne({
        _id:id
    }).then(todos => {
        console.log(todos);
    }).catch(err => {
        console.log(err);
});
*/

// find by Id qd on fait la recherche by id
    Todo.findById(todoId).then(todos => {

        if(!todos) {
           return console.log("todo not found");
        }
        console.log(todos);
    }).catch(err => console.log(err));

// find User
    User.findById(userId).then(user => {
        if (!user) {
           return console.log("user not found");
        }
        console.log("he is the user: ", user);
    }).catch(err => console.log("fatal error, invalid id"));