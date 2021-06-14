const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
  artists: {type: String, required: true},
  songs: {type: String, required: true},
})

module.exports = mongoose.model('Song', songSchema)