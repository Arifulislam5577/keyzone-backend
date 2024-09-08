export interface IOrder {
  name: string
  email: string
  phone: string
  address: string
  payment: string
  orderedProduct: [
    {
      _id: string
      quantity: number
    }
  ]
  status: 'pending' | 'processing' | 'delivered' | 'cancelled'
  isPaid: boolean
  totalPrice: number
  totalQuantity: number
}

export interface IOrderResponse {
  success: boolean
  statusCode: number
  message: string
  data?: IOrder
}
