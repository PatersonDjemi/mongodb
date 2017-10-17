var mongoose = require('mongoose');
var { Schema } = mongoose;
const validator = require('validator');
var jwt = require("jsonwebtoken");
const _ = require('lodash');


var mySchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]

});

mySchema.methods.toJSON = function () {
    var user = this;

    var userObject = user.toObject(); // toObject prend mon document et me retourne un objet litteral avec les proprietes du doc

    return _.pick(userObject, ["_id", "email"]);
}

mySchema.methods.generateAuthToken = function () {
    var user = this;
    var access = "auth";
    var secret = "mysecret";

    var token = jwt.sign({_id: user._id.toHexString(), access}, secret).toString();

    user.tokens.push({access, token});

    return user.save().then(() => token);
}

var User = mongoose.model("User", mySchema);

module.exports = User;

// validate nous oermet de faire des validations sur notre valeur
// validator: validator.isEmail