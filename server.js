const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
app.use(express.urlencoded({extended: true}))

const TrailSchema = require('./models/hiking_trails.js')
const Data = require('./models/hiking_data.js')

app.use( express.static( "public" ) );
app.use(methodOverride('_method'))

app.listen(3000, () => {
  console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/trails', () => {
  console.log('connection with mongod is established');
})


// TrailSchema.create(Data, (error, createdTrails) => {
// //^your schema  //^your pokemon.js
//   console.log("done!");
// })


// GET Methods


// Index Pages
app.get("/", (req, res) => {
  TrailSchema.find({}, (error, allTrails) => {
    res.render('trails_index.ejs', {
      trails: allTrails
    })
  })
})

app.get("/favorites", (req, res) => {
  TrailSchema.find({liked: true}, (error, allFavs) => {
    res.render('favorites_index.ejs', {
      favs: allFavs
    })
  })
})

// New Pages
app.get("/newtrail", (req, res) => {
  res.render('trails_new.ejs')
})


// Show Pages

app.get("/:_id", (req, res) => {
  TrailSchema.findById(req.params._id, (err, foundTrail) => {
    res.render(
      'trails_show.ejs',
      {
        trail: foundTrail
      }
    )
  })
})

// Updating data
app.put('/favorites', (req, res) => {
  console.log(req.body._id);
  TrailSchema.findByIdAndUpdate(req.body._id, {liked: true}, {new: true}, (err, updatedTrail) => {
    res.redirect('/favorites')
  })
})


// Creating new data

app.post('/approval/sent', (req, res) => {
  TrailSchema.create(req.body, (error, submittedTrail) => {
    res.render('approval_sent.ejs')
  })
})
