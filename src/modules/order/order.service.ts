import { Product } from '../product/product.model'
import { IOrder, IOrderResponse } from './order.interface'
import { Order } from './order.model'

const createOrderService = async (data: IOrder): Promise<IOrderResponse> => {
  const { orderedProduct } = data

  let totalPrice: number = 0
  let totalQuantity: number = 0

  for (const product of orderedProduct) {
    const productData = await Product.findById(product._id)

    if (!productData) {
      return {
        success: false,
        statusCode: 404,
        message: `Product with ID ${product._id} not found.`
      }
    }

    if (productData.available_quantity < product.quantity) {
      return {
        success: false,
        statusCode: 400,
        message: `Does not have enough stock. Available stock: ${productData.available_quantity}.`
      }
    }

    totalPrice += productData.price * product.quantity
    totalQuantity += product.quantity
  }

  for (const product of orderedProduct) {
    await Product.findByIdAndUpdate(product._id, {
      $inc: { available_quantity: -product.quantity }
    })
  }

  const orderData = await Order.create({ ...data, totalPrice, totalQuantity })

  return {
    success: true,
    statusCode: 201,
    message: 'Order created successfully',
    data: orderData
  }
}

export { createOrderService }
