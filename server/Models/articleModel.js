// var mongoose = require('mongoose')
// var Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost:27017/hackpress_tezaharsony')
//
// const articlesSchema = new Schema ({
//    title: String,
//    description: String,
//    author: String,
//    category: String
//
// })
//
// const articles = mongoose.model('articles', articlesSchema)
//
// module.exports = articles;


const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/hackpress_tezaharsony')

const articleSchema = new Schema ({
   title: String,
   author: String,
   category: String,
   description: String
})

const articles = mongoose.model('articles', articleSchema)

module.exports = articles;
