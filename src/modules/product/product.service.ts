import ProductQueryBuilder from '../../builder/productApiQuery'
import { uploadImage } from '../../utils/uploadImage'
import { IProduct, IProductResponse } from './product.interface'
import { Product } from './product.model'

const createProductService = async (data: IProduct): Promise<IProductResponse> => {
  const { image, ...restProductData } = data

  const productImage = await uploadImage(image)

  const productData = await Product.create({
    ...restProductData,
    image: productImage
  })

  return {
    success: true,
    statusCode: 201,
    message: 'Product created successfully',
    data: productData
  }
}

const getProductsService = async (query: Record<string, unknown>): Promise<IProductResponse> => {
  const productQuery = new ProductQueryBuilder(Product.find(), query)
    .search(['name', 'brand'])
    .filter()
    .sort()
    .paginate()
    .fields()

  const productData = await productQuery.query
  const metadata = await productQuery.countTotal()

  return {
    success: true,
    statusCode: 200,
    message: 'Products retrieved successfully',
    data: productData,
    metadata
  }
}

const getProductService = async (productId: string): Promise<IProductResponse> => {
  const productData = await Product.findById(productId)

  if (!productData) {
    return {
      success: false,
      statusCode: 404,
      message: 'No Product Found'
    }
  }

  return {
    success: true,
    statusCode: 200,
    message: 'Product retrieved successfully',
    data: productData
  }
}

const updateProductService = async (id: string, data: IProduct): Promise<IProductResponse> => {
  const cleanedData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined && value !== null && value !== '')
  )

  if (cleanedData.image) {
    cleanedData.image = await uploadImage(cleanedData.image)
  }

  const productData = await Product.findByIdAndUpdate(id, cleanedData, { new: true })

  if (!productData) {
    return {
      success: false,
      statusCode: 404,
      message: 'Product not found'
    }
  }
  return {
    success: true,
    statusCode: 200,
    message: 'Product updated successfully',
    data: productData
  }
}

const deleteProductService = async (id: string): Promise<IProductResponse> => {
  const product = await Product.findByIdAndDelete(id)

  if (!product) {
    return {
      success: false,
      statusCode: 404,
      message: 'Product not found'
    }
  }
  return {
    success: true,
    statusCode: 200,
    message: 'Product deleted successfully'
  }
}

export { createProductService, deleteProductService, getProductService, getProductsService, updateProductService }
