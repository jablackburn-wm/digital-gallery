
const { StatusCodes } = require('http-status-codes')

class CustomAPIError extends Error {
    constructor(message) {
      super(message)
    }
  }

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message),
        this.statusCode = StatusCodes.BAD_REQUEST
    }
  }

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message),
      this.statusCode = StatusCodes.UNAUTHORIZED
    }
  }

module.exports = {
    CustomAPIError,
    BadRequest,
    UnauthenticatedError
}
