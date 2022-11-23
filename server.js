const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
app.use(express.urlencoded({extended: true}))

const TrailSchema = require('./models/hiking_trails.js')
const FavoritesSchema = require('./models/favorite_trails.js')
const Data = require('./models/hiking_data.js')

app.use( express.static( "public" ) );
app.use(methodOverride('_method'));

// TrailSchema.create(Data, (error, createdTrails) => {
// //^your schema  //^your pokemon.js
//   console.log("done!");
// })


// Index Pages
app.get("/", (req, res) => {
  TrailSchema.find({}, (error, allTrails) => {
    res.render('trails_index.ejs', {
      trails: allTrails
    })
  })
})

// app.get("/favorites", (req, res) => {
//   TrailSchema.find({liked: true}, (error, allFavs) => {
//     res.render('favorites_index.ejs', {
//       favs: allFavs
//     })
//   })
// })

app.get("/favorites", (req, res) => {
  FavoritesSchema.find({}, (error, allFavs) => {
    res.render('favorites_index.ejs', {
      favs: allFavs
    })
  })
})

// New Pages
app.get("/new/trail", (req, res) => {
  res.render('trails_new.ejs')
})

app.post('/favorites', (req, res) => {
  FavoritesSchema.create(req.body, (err, likedTrail) => {
    res.redirect("/favorites")
  })
})

// Edit Page


// Show Pages

app.get("/favorites/:_id", (req, res) => {

  FavoritesSchema.findById(req.params._id, (err, foundFav) => {
    res.render(
      'favorites_show.ejs',
      {
        fav: foundFav,
      }
    )
  })
})




// app.get("/:_id", (req, res) => {
//   TrailSchema.findById(req.params._id, (err, foundTrail) => {
//     console.log(`he... ${foundTrail} ...llo`);
//     console.log(`al... ${req.params._id} ...ex `);
//     res.render(
//       'trails_show.ejs',
//       {
//         trail: foundTrail
//       }
//
//     )
//   })
// })

app.get('/show/:id', (req, res) => {
  TrailSchema.findById(req.params.id, (err, foundTrail) => {
    res.render(
      'trails_show.ejs',
      {
        trail: foundTrail
      }
    )
  })
})

// update edited favorite

app.get('/favorites/:id/edit', (req, res) => {
  FavoritesSchema.findById(req.params.id, (err, foundFav) => {
    res.render(
      'favorites_edit.ejs',
      {
        fav: foundFav
      }
    )
  })
})


app.put('/favorites/:id', (req, res) => {
  FavoritesSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedFav) => {
    res.redirect('/favorites')
  })
})








// // Maybe try doing?
// const updateFav = () => {
//   app.post('/favorites', (req, res) => {
//     FavoritesSchema.create(req.body, (err, likedTrail) => {
//       next()
//     })
//   })
//   app.put('/favorites', (req, res) => {
//
//     TrailSchema.findByIdAndUpdate(req.body._id, {liked: true}, {new: true}, (err, updatedTrail) => {
//       res.redirect('/favorites')
//     })
//   })
// }

// Updating data
// app.put('/favorites', (req, res) => {
//   console.log(req.body._id);
//   TrailSchema.findByIdAndUpdate(req.body._id, {liked: true}, {new: true}, (err, updatedTrail) => {
//     res.redirect('/favorites')
//   })
// })

// Creating new data

app.post('/approval/sent', (req, res) => {
  TrailSchema.create(req.body, (error, submittedTrail) => {
    res.render('approval_sent.ejs')
  })
})

// Deleting from favorites
app.delete("/favorites/:_id", (req, res) => {
  FavoritesSchema.findByIdAndRemove(req.params._id, (err, favItem) => {
    res.redirect('/favorites')
  })
})



app.listen(3000, () => {
  console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/trails', () => {
  console.log('connection with mongod is established');
})
