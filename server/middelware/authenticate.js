var User = require('../models/user');

var authenticate = (req, res, next) => {

        var token = req.header('x-auth'); // header est un peu comme body mais prend en parametre l identifiant de ce qu on veut ds le header

    User.findByToken(token).then(user => {
        if (!user) {
        return Promise.reject(); // va renvoyer une erreur ce qui va faire en sorte qu on passe au catch block
    }

    console.log(user);

    req.user = user;
    req.token = token;

    next();

    }).catch(err => {
        res.status(401).send();
  });

}

module.exports = authenticate;