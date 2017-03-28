const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/inventory-app')
const Schema = mongoose.Schema;

//Items
var ItemSchema = new Schema({
  Name : { type : String, required : true },
  Model : { type : String, required : true },
  Price : { type : Number , required : true },
  Description : {  type : String }
})

exports.Item = mongoose.model('Item', ItemSchema);
