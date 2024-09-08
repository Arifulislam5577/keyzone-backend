import express from 'express'
import { ZodValidation } from '../../middleware/ZodValidation'
import { orderController } from './order.controller'
import { createOrderZodSchema } from './order.validation'

const router = express.Router()

router.route('/').post(ZodValidation(createOrderZodSchema), orderController.createOrder)

export default router
