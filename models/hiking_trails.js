const mongoose = require('mongoose')

const trailsSchema = new mongoose.Schema({
  trailName: String,
  image: String,
  mapsLink: String,
  description: String,
  length: Number,
  difficulty: String,
  quality: String,
  liked: {type: Boolean, default: false}
})

const trailsCollection = mongoose.model('trailInfo', trailsSchema)

module.exports = trailsCollection
