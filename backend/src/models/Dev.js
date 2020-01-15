const mongoose = require('mongoose');

//Esquema do banco
const DevSchema = new mongoose.Schema( {
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
})

//exportando nome do banco e o esquema
module.exports = mongoose.model('Dev', DevSchema);