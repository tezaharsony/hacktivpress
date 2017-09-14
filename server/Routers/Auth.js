const express = require('express');
const router = express.Router();
const AuthCont = require('../Controllers/authController')

router.post('/', AuthCont.Login)


module.exports = router
