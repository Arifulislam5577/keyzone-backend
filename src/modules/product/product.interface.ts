export interface IProduct {
  name: string
  price: number
  description: string
  brand: string
  available_quantity: number
  image: string
  rating: number
}

export interface IProductResponse {
  success: boolean
  statusCode: number
  message: string
  data?: IProduct | null | IProduct[]
  metadata?: {
    page: number
    limit: number
    totalDocuments: number
    totalPages: number
  }
}
