var Auth = require('../Models/userModel');
var bcrypt = require ('bcryptjs')
var jwt = require ('jsonwebtoken')

var Login = function (req, res) {
  Auth.findOne({name : req.body.name}, function(err, user){
    if (bcrypt.compareSync(req.body.password, user.password)) {
      let token = jwt.sign({
        id: user._id,
        name: user.name
      }, "kantal")
      res.send(token)
    } else {
      res.send('please type your correct password')
    }
  });
}


module.exports = { Login };
