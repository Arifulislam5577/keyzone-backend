import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>(
  {
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    available_quantity: { type: Number },
    brand: { type: String },
    image: { type: String },
    rating: { type: Number }
  },
  {
    timestamps: true
  }
)

const Product = model<IProduct>('Product', productSchema)

export { Product }
