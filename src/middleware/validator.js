import { validationResult } from 'express-validator'

const validator = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).send({ validationErrors: errors.mapped() })
  } else {
    next()
  }
}

export default validator
