var express = require('express');
var router = express.Router();
const controller = require ('../Controllers/articlesController')

router.get('/', controller.getAll)
// router.post('/',controller.addArticle)
// router.get('/:id',controller.getById)

module.exports = router
