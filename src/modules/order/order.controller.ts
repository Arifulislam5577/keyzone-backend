import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { createOrderService } from './order.service'

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const data = await createOrderService(req.body)
  res.status(data.statusCode).json({ ...data })
})

export const orderController = { createOrder }
