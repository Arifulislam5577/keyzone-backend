import express from 'express'
import { ZodValidation } from '../../middleware/ZodValidation'
import { productController } from './product.controller'
import { createProductZodSchema } from './product.validation'

const router = express.Router()

router
  .route('/')
  .get(productController.getProducts)
  .post(ZodValidation(createProductZodSchema), productController.createProduct)

router
  .route('/:id')
  .get(productController.getProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)

export default router
