import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './middleware/globalErrorHandler'
import orderRouter from './modules/order/order.route'
import productRouter from './modules/product/product.route'

const app: Application = express()

app.use(cors({ origin: 'https://keyzone-frontend.vercel.app/' }))

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.json('API working')
})

// API Routes

app.use('/api/v1/products', productRouter)
app.use('/api/v1/order', orderRouter)

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Api Not Found'
  })
})

app.use(globalErrorHandler)

export default app
