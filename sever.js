const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 3003

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/stuffILike', {
     useNewUrlParser: true,
     useUnifiedTopology: true
})

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo :)')
})

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

const bookmarksController = require('./controllers/bookmarks.js')

app.use('/bookmarks/', bookmarksController)

app.listen(PORT, () => {
    console.log('listening on', PORT)
  })