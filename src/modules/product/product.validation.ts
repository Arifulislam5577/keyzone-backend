import { z } from 'zod'

const createProductZodSchema = z.object({
  name: z.string({ required_error: 'Product Name is required' }),
  description: z.string({ required_error: 'Product description is required' }),
  brand: z.string({ required_error: 'Product brand is required' }),
  image: z.string({ required_error: 'Product image is required' }),
  rating: z.number({ required_error: 'Product rating is required' }),
  price: z
    .number({ required_error: 'Product Price is required' })
    .positive({ message: 'Price must be greater than 0' }),
  available_quantity: z.number({ required_error: 'Product quantity is required' })
})

export { createProductZodSchema }
