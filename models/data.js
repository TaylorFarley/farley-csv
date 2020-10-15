const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dataSchema = new Schema({
  title: String,
  log: String,
  sub: String,
  org: String
  
}, {
    collection: 'data'
  })

module.exports = mongoose.model('Data', dataSchema)