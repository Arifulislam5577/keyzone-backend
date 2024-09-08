import { model, Schema } from 'mongoose'
import { IOrder } from './order.interface'

const orderSchema = new Schema<IOrder>(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    payment: { type: String },
    orderedProduct: [
      {
        _id: { type: String },
        quantity: { type: Number }
      }
    ],
    status: { type: String, default: 'pending' },
    isPaid: { type: Boolean, default: false },
    totalPrice: { type: Number, default: 0 },
    totalQuantity: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
)

const Order = model<IOrder>('Order', orderSchema)

export { Order }
