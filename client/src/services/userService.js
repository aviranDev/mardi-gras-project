import jwtDecode from "jwt-decode";
import httpService from "./httpService"
import configData from "../config.json"

const TOKEN_KEY = 'my_token'
httpService.setDefaultCommonHeader('x-auth-token', getJWT());

export function adminEntery() {
  return httpService.get(`${configData.apiUrl}/enter-admin`, { withCredentials: true })
}

export function createUser(user) {
  return httpService.post(`${configData.apiUrl}/users`, user)
}

export async function logIn(email, password) {
  httpService.setDefaultCommonHeader('x-auth-token', getJWT());
  const { data: { token } } = await httpService.post(`${configData.apiUrl}/auth`, { email, password })
  localStorage.setItem(TOKEN_KEY, token);
}


export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch {
    return null
  }

}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUserProfile() {
  return httpService.get(`${configData.apiUrl}/users/me`)
}


export function logOut() {
  localStorage.removeItem(TOKEN_KEY);
}

const userService = {
  createUser,
  logIn,
  getCurrentUser,
  getJWT,
  logOut,
  getUserProfile,
  adminEntery
}

export default userService