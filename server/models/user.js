var mongoose = require('mongoose');
var { Schema } = mongoose;

var mySchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});


var User = mongoose.model("User", mySchema);

module.exports = User;