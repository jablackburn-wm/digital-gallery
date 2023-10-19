const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'artwork name must be provided'],
  },
  item_id: {
    type: Number
  },
  image: {
    type: String,
    required: [true, 'must provide image url']
  },
  description: {
    type: String,
    required: [true, 'must provide image description']
  },
  auction: {
    type: Boolean,
    required: [true, 'must specify auction style']
  },
  price: {
    type: Number,
  },
  highestBid: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  artist: {
    type: String,
    required: [true, 'artist must be provided'],
  },
})

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide artist name']
    },
    image: {
      type: String,
      required: [true, 'must provide artist picture']
    },
    bio: {
        type: String,
        required: [true, 'must provide description']
    },
    artworks: {
        type: Array
    }

})

const userSchema = new mongoose.Schema({
  username: {
      type: String,
      required: [true, 'must provide username']
  },
  password: {
    type: String,
  }
})


module.exports = {
    Artwork: mongoose.model('Artwork', artworkSchema),
    User: mongoose.model('User', userSchema),
    Artist: mongoose.model('Artist', artistSchema)
}