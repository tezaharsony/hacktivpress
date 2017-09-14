const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/hackpress_tezaharsony')

const articleSchema = new Schema ({
   title: String,
   author: String,
   category: String,
   description: String
})

var articles = mongoose.model('articles', articleSchema)

module.exports = articles;
