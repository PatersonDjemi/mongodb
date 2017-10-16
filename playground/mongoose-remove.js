const {mongoose} = require("../server/db/mongoose");
const Todo = require("../server/models/todo");
const User = require("../server/models/user");
const {ObjectID} = require("mongodb");


/*
// Todos remove() remove all
    Todo.remove({}).then(result => {
       console.log(result);
    });


// Todos findOneAndDelete et retourne le document removed
    Todo.findOneAndRemove().then(result => {
        console.log(result);
    });
*/
// Todos findByIdRemove
    Todo.findByIdAndRemove("59e363082374c51d0b13587c").then(result => {
        console.log(result);
    });