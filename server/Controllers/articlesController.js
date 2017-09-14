const mongoose = require('mongoose')
const articleModel = require('../Models/articleModel')
mongoose.connect('mongodb://localhost:27017/hackpress_tezaharsony')

var getAll = function (req, res) {
  articleModel.find({}, function (err,articles){
    if(!err) {
      res.send(articles)
    } else {
      res.send(err)
    }
  })
}

// var getById = function (req, res) {
//   articleModel.findOne({_id : req.params.id }, function (err, articles){
//     if(!err) {
//       res.send(article)
//     } else {
//       res.send(err)
//     }
//   })
// }
//
// var addArticle = function (req, res) {
//   var Articles = new articleModel({
//     title: req.body.title,
//     author: req.body.author,
//     category: req.params.id,
//     description: req.body.description
//   })
//
//   Article.save(function (err,articles) {
//     if (!err) {
//       res.send(articles)
//     } else {
//       res.send(err)
//     }
//   })
// }
//
// var updateArticle = function (req, res){
//   articleModels.findByIdAndUpdate({
//     _id : req.params.id
//   },{
//     articles : req.body.articles
//   })
//   .then(articles => {
//     res.send(article)
//   })
//   .catch(err =>{
//     res.send(err)
//   })
// }
//
// var removeArticle = function (req, res) {
//   articleModels.remove({_id: req.params.id}, function (err){
//     if (!err) {
//       res.send("data deleted")
//     } else {
//       res.send(err)
//     }
//   })
// }


module.exports = {
  getAll
  // getById,
  // addArticle,
  // updateArticle,
  // removeArticle
};
