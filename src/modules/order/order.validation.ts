import { z } from 'zod'

const createOrderZodSchema = z.object({
  name: z.string({ required_error: 'Product Name is required' }),
  email: z.string({ required_error: 'Email is required' }),
  phone: z.string({ required_error: 'Phone number is required' }),
  address: z.string({ required_error: 'Delivery address is required' }),
  payment: z.enum(['cod', 'stripe'], { required_error: 'Payment method is required' }),
  orderedProduct: z.array(
    z.object({
      _id: z.string({ required_error: 'Product id is required' }),
      quantity: z.number({ required_error: 'Product quantity is required' })
    }),
    {
      required_error: 'Products are required'
    }
  )
})

export { createOrderZodSchema }
