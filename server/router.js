
const express = require('express')
const router = express.Router()

const { login, auth, getAllArtists, getArtist, getAllArtworks, getArtwork, updateArtworkAuction, getArtistAndArtworks } = require('./controllers')

router.route('/auth').get(auth)
router.route('/login').post(login)

router.route('/artists').get(getAllArtists)
router.route('/artworks').get(getAllArtworks)
router.route('/artists/:name').get(getArtist)
router.route('/artworks/:name').get(getArtwork).patch(updateArtworkAuction)
router.route('/artists/profile/:name').get(getArtistAndArtworks)



module.exports = router