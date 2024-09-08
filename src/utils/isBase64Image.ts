export const isBase64Image = (image: string): boolean => {
  return /^data:image\/[a-zA-Z]+;base64,/.test(image)
}
