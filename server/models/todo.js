var mongoose = require('mongoose');

// a model permet de dire à Mongoose comment nos données sont sturcturées,
// on peut aussi dire que le model prend le nom de la table, et le schema comme deuxieme argument

var Todo = mongoose.model("Todos", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});



module.exports = Todo;

