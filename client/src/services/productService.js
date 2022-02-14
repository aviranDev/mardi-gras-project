import httpService from "./httpService";
import configData from "../config.json"

export function createProduct(product) {
  return httpService.post(`${configData.apiUrl}/products/create-product`, product);
}

export function getMyProducts() {
  return httpService.get(`${configData.apiUrl}/products/my-products`)
}

export function getUserProducts(user_id) {
  return httpService.get(`${configData.apiUrl}/products/display-user-products/${user_id}`)
}

export function getAllProducts() {
  return httpService.get(`${configData.apiUrl}/products/display-products`)
}

export function updateMyProduct({ _id, ...body }) {
  return httpService.put(`${configData.apiUrl}/products/update-product/${_id}`, body);
}

export function getMyProducyById(id) {
  return httpService.get(`${configData.apiUrl}/products/display-my-product/${id}`)
}

export function getProductById(id) {
  return httpService.get(`${configData.apiUrl}/products/display-one-product/${id}`)
}

export function deleteProductById(id) {
  return httpService.delete(`${configData.apiUrl}/products/remove-product/${id}`)
}


const productService = {
  createProduct,
  getMyProducts,
  getAllProducts,
  updateMyProduct,
  getMyProducyById,
  getProductById,
  deleteProductById,
  getUserProducts,
}

export default productService