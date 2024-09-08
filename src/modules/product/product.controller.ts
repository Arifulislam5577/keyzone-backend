import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import {
  createProductService,
  deleteProductService,
  getProductService,
  getProductsService,
  updateProductService
} from './product.service'

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await createProductService(req.body)
  res.status(data.statusCode).json(data)
})

const getProducts = catchAsync(async (req: Request, res: Response) => {
  const data = await getProductsService(req.query)
  res.status(data.statusCode).json(data)
})

const getProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await getProductService(req.params.id)
  res.status(data.statusCode).json(data)
})

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await updateProductService(req.params.id, req.body)
  res.status(data.statusCode).json(data)
})

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await deleteProductService(req.params.id)
  res.status(data.statusCode).json(data)
})

export const productController = { createProduct, getProducts, getProduct, updateProduct, deleteProduct }
