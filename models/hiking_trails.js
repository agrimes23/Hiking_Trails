const mongoose = require('mongoose')
const Favorite = require('./favorite_trails.js')

const trailsSchema = new mongoose.Schema({
  trailName: String,
  trailImage: String,
  mapsLink: String,
  description: String,
  length: Number,
  difficulty: String,
  quality: String,
  liked: {type: Boolean, default: false},
  favoritedItems: [Favorite.schema]
})

const trailsCollection = mongoose.model('trailInfo', trailsSchema)

module.exports = trailsCollection
