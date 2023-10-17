const { BadRequest, UnauthenticatedError } = require('./errors')
const jwt = require('jsonwebtoken')
const { Artist, Artwork } = require('./models.js')

const validate = require('./validate.js')



const login = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        throw new BadRequest('please provide email & password')
    }
    const token = jwt.sign({password, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({msg: 'user created', token})
}

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Token Data Invalid')
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {password, username} = decoded

        const user = await validate(username, password, next)

        res.status(200).json({user: user})
    } catch (error) {
        next(error) 
    }

  
}


const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find({})
        res.status(200).json({ artists })
    } catch (err) {
        console.log(err)
    }
}

const getArtist = async (req, res) => {
    const {name: name} = req.params
    try {
        const artist = await Artist.findOne({ name: name })
        res.status(200).json({artist})
    } catch (err) {
        console.log(err)
    }
}

const getAllArtworks = async (req, res) => {
    try {
        const artworks = await Artwork.find({})
        res.status(200).json({ artworks })
    } catch (err) {
        console.log(err)
    }
}

const getArtwork = async (req, res) => {
    const {name: name} = req.params
    try {
        const artwork = await Artwork.findOne({ name: name })
        res.status(200).json({ artwork })
    } catch (err) {
        console.log(err)
    }
}

const updateArtworkAuction = async (req, res) => {
    const {name: name} = req.params
    try {
        const artwork = await Artwork.findOneAndUpdate({ name: name }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!artwork) {
            return next(createCustomError(`No task with name : ${name}`, 404))
        }
        res.status(200).json({ artwork })
    } catch (err) {
        console.log(err)
    }
}

const getArtistAndArtworks = async (req, res) => {
    const {name: name} = req.params
    try {
        const artist = await Artist.findOne({ name: name })
        const artworks = await Artwork.find({artist: artist.name}) 
        res.status(200).json({artist: artist, artworks: artworks})
        
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    login, 
    auth, 
    getAllArtists, 
    getArtist,
    getAllArtworks,
    getArtwork,
    updateArtworkAuction,
    getArtistAndArtworks
}