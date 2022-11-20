const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
app.use(express.urlencoded({extended: true}))

const TrailSchema = require('./models/hiking_trails.js')
const Data = require('./models/hiking_data.js')

const FavoritesSchema = require('./models/favorite_trails.js')

app.use( express.static( "public" ) );
app.use(methodOverride('_method'))

// TrailSchema.create(Data, (error, createdPokemon) => {
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
  FavoritesSchema.find({}, (error, allFavs) => {
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


// Creating new data

app.post('/approvalsent', (req, res) => {
        TrailSchema.create(req.body, (error, submittedTrail) => {
            res.render('approval_sent.ejs')
    })
})

app.post('/favorites', (req, res) => {
  FavoritesSchema.create(req.body, (error, likedTrail) => {
    res.render('favorites_index.ejs')
  })
})



app.listen(3000, () => {
  console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/trails', () => {
  console.log('connection with mongod is established');
})
