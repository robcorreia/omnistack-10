const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');


//Esquema do banco
const DevSchema = new mongoose.Schema( {
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
})
mongoose.set('useCreateIndex', true); //para retirar o warning

//exportando nome do banco e o esquema
module.exports = mongoose.model('Dev', DevSchema);