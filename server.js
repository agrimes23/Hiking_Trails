const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
app.use(express.urlencoded({extended: true}))

const TrailSchema = require('./models/hiking_trails.js')
const Data = require('./models/hiking_data.js')

app.use( express.static( "public" ) );
app.use(methodOverride('_method'))

// TrailSchema.create(Data, (error, createdPokemon) => {
// //^your schema  //^your pokemon.js
//   console.log("done!");
// })


// GET Methods

app.get("/", (req, res) => {
  TrailSchema.find({}, (error, allTrails) => {
    res.render('trails_index.ejs', {
      trails: allTrails
    })
  })

})

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





app.listen(3000, () => {
  console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/trails', () => {
  console.log('connection with mongod is established');
})
