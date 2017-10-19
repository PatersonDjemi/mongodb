const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

// jwt.sign prend notre objet(id) et secret, le hash et retourne le token
// jwt.verify take the token and the secret et verifiy si ca n a pas ete changé;

/*
var data = {
    id: 10
};

var secret = "mon secret";

var token = jwt.sign(data, secret);

var decoded = jwt.verify(token, secret);
*/
/*
var message = "my message";

var hash = SHA256(message).toString();

console.log("message: ", message);
console.log("hash is: ", hash);


var data = {
    id: 4
};
 var ha = JSON.stringify(data);



var token= {
    data,
    hash: SHA256(JSON.stringify(data) + "mysecret").toString()
};


token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var result = SHA256(JSON.stringify(token.data) + "mysecret").toString();


if (result === token.hash) {
    console.log("data wasnt manipulate");
    } else {
    console.log("data was changed, dont trust");
}
*/



var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
});
});

var hashedpassword = "$2a$10$gfNknIw/LRKpwMMcm988k.4.M5b1C3EY2BM1y7aF1Yu9BAdX50lUu";

bcrypt.compare('125', hashedpassword, (err, res) => {
    console.log(res);
});