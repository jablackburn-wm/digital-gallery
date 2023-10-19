require('dotenv').config()

const connectDB = require('./db')
const { Artwork, Artist, User } = require('./models')

const Artworks = require('./data/artworks.json')
const Artists = require('./data/artists.json')
const Users = require('./data/users.json')

const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const start = async () => {
  try {
    await connectDB(`mongodb+srv://${username}:${password}@portfolio-cluster.sknurkv.mongodb.net/e-commerce?retryWrites=true&w=majority`);

    await Artwork.deleteMany()
    await Artist.deleteMany()
    await User.deleteMany()

    await Artwork.create(Artworks)
    await Artist.create(Artists)
    await User.create(Users)

    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
