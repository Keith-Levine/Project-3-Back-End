const express = require('express')
const bookmarks = express.Router()

const Bookmark = require('../models/bookmarks.js')

mongoose.connect('mongodb://localhost:27017/songs', {
     useNewUrlParser: true,
     useUnifiedTopology: true
})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo :)')
})