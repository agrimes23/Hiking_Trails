const mongoose = require('mongoose')

const favoritesSchema = new mongoose.Schema({
  trailName: String,
  image: String,
  mapsLink: String,
  description: String,
  length: Number,
  difficulty: String,
  quality: String,
  like: Boolean,
})

const favoritesCollection = mongoose.model('Favorite', favoritesSchema)

module.exports = favoritesCollection
