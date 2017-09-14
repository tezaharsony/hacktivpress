const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/hackpress_tezaharsony')

const articleSchema = new Schema ({
   title: String,
   description: String,
   author: {
     type: Schema.Types.ObjectId,
     ref:'user'
   }
   category: String

})

const articles = mongoose.model('articles', articleSchema)

module.exports = articles;
