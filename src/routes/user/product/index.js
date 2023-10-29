import express from 'express'

import { param } from 'express-validator'

import validatorMiddleware from 'middleware/validator'

import get from './get'
import list from './list'

const router = express.Router()

router.post('/list', validatorMiddleware, list)

router.get('/:id', param('id').isInt().toInt(), validatorMiddleware, get)

export default router
