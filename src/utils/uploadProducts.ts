import { productData } from '../data/demoProduct'
import { Order } from '../modules/order/order.model'
import { Product } from '../modules/product/product.model'

const seedProducts = async () => {
  try {
    await Product.deleteMany()
    await Order.deleteMany()
    console.log('Product deleted')
    await Product.insertMany(productData)
    console.log('Product added')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seedProducts()
