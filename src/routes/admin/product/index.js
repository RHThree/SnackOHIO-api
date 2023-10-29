import express from 'express'

import { body, param, query } from 'express-validator'

import validatorMiddleware from 'middleware/validator'

import create from './create'
import deleteRoute from './delete'
import get from './get'
import list from './list'
import update from './update'

const router = express.Router()

router.post(
  '/create',
  body('name').isString(),
  body('description').isString(),
  validatorMiddleware,
  create,
)

router.post(
  '/delete/:id',
  param('id').isInt().toInt(),
  validatorMiddleware,
  deleteRoute,
)

router.post(
  '/update/:id',
  body('name').isString().optional(),
  body('description').isString().optional(),
  validatorMiddleware,
  update,
)

router.get('/list', validatorMiddleware, list)

router.get('/:id', param('id').isInt().toInt(), validatorMiddleware, get)

export default router
