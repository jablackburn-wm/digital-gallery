const { UnauthenticatedError } = require("./errors")     
const { User } = require('./models.js')
const CryptoJS = require("crypto-js")
require('dotenv').config()



// username-password validation

const validate = async (username, password, next) => {
    try {
        //get user or throw no username error
        const user = await User.findOne({username: username})
        if (user == undefined) {
            throw new UnauthenticatedError(`no user with username: ${username}`)
        }

        //decrypt encrypted password stored in db, save as string
        let decipher = CryptoJS.AES.decrypt(user.password, process.env.JWT_SECRET).toString(CryptoJS.enc.Utf8)

        //check if given password is equal to the deciphered password
        if (password == decipher) {
            return user
        } else {
            throw new UnauthenticatedError('password incorrect')
        }
    } catch (err) {
        next(err)
    }

}

module.exports = validate