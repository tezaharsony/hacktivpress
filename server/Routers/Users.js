const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const userCont = require('../Controllers/userController')

const auth = (req, res, next) =>
{
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, "kantal");
    {
      req.headers.authentic = decoded
      next()
    }
  }
  else {
    res.send('you should login')
  }
}

router.post('/',  userCont.create)
router.get('/', auth, userCont.getAllUsers)
router.delete('/:id', auth, userCont.removeSpecifiedUser)


module.exports = router
