const mongoose = require('mongoose')
const Trail = require('./hiking_trails.js')

const favoriteSchema = new mongoose.Schema({
  trailName: String,
  trailImage: String,
  mapsLink: String,
  description: String,
  length: Number,
  difficulty: String,
  quality: String,
  liked: {type: Boolean, default: false}
})

const favoriteCollection = mongoose.model('Favorite', favoriteSchema)

module.exports = favoriteCollection
