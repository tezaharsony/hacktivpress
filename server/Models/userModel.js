var mongoose = require ('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/hackpress_tezaharsony')

const userSchema = new Schema ({
  name : {
    type : String,
    required : [true, 'nama tidak boleh kosong']
  },
  password : {
    type : String,
    required : [true, 'password tidak boleh kosong']
  }
}, {
  timestamps: true
})

var user = mongoose.model('user',userSchema)

module.exports = user;
