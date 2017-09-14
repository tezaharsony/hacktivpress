const mongoose = require('mongoose')
const articleModel = require('../Models/articleModel')


var getAll = function (req, res) {
  articleModel.find({}, function (err,article){
    if(!err) {
      res.send(article)
    } else {
      res.send(err)
    }
  })
}

var getById = function (req, res) {
  articleModel.findOne({_id : req.params.id }, function (err, article){
    if(!err) {
      res.send(article)
    } else {
      res.send(err)
    }
  })
}

var addArticle = function (req, res) {
  var Article = new articleModel({
    title: req.body.title,
    author: req.body.author,
    category: req.params.id,
    description: req.body.description
  })

  Article.save(function (err,article) {
    if (!err) {
      res.send(article)
    } else {
      res.send(err)
    }
  })
}

var updateArticle = function (req, res){
  articleModels.findByIdAndUpdate({
    _id : req.params.id
  },{
    article : req.body.article
  })
  .then(article => {
    res.send(article)
  })
  .catch(err =>{
    res.send(err)
  })
}

var removeArticle = function (req, res) {
  articleModels.remove({_id: req.params.id}, function (err){
    if (!err) {
      res.send("data deleted")
    } else {
      res.send(err)
    }
  })
}


module.exports = {
  getAll,
  getById,
  addArticle,
  updateArticle,
  removeArticle
};
