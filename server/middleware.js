const { CustomAPIError } = require('./errors')
const { StatusCodes } = require('http-status-codes')


const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
      return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later')
  }

const notFound = (req, res) => res.status(404).send('Route does not exist')




module.exports = {
    errorHandlerMiddleware,
    notFound
}