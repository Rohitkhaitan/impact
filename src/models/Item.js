var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  username: { type: String, lowercase: true, required: true, unique: true},
  password: { type: String, required: true},
  gender: { type: String, required: true},
  country: {type: String, required: true},
  image: { data: Buffer, contentType: String },

  address:{type:String},
  dob:{type:Date},
  addhar:{type:Number},
  mobile:{type:Number}


},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);
