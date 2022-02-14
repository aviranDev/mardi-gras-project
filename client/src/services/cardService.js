import httpService from "./httpService";
import configData from "../config.json"

/**
 * @param {*} card 
 * @returns GENERATED CARD
 */
export function createCard(card) {
  return httpService.post(`${configData.apiUrl}/cards`, card);
}


/**
 * GET USER CARDS
 * @returns CARDS\CARD
 */
export function getMyCards() {
  return httpService.get(`${configData.apiUrl}/cards/my-card`)
}


/**
 * GET ALL SELLERS CARDS
 * @returns ALL AVAILABLE CARDS
 */
export function getAllCards() {
  return httpService.get(`${configData.apiUrl}/cards/display-cards`);
}


/**
 * EDIT CARD
 */
export function updateMyCard({ _id, ...card }) {
  return httpService.put(`${configData.apiUrl}/cards/update/${_id}`, card);
}

export function getMyCardById(id) {
  return httpService.get(`${configData.apiUrl}/cards/own/${id}`)
}

export function getCardById(id) {
  return httpService.get(`${configData.apiUrl}/cards/one/${id}`);
}

export function deleteCardById(id) {
  return httpService.delete(`${configData.apiUrl}/cards/remove-card/${id}`);
}



const cardService = {
  createCard,
  getMyCards,
  getAllCards,
  updateMyCard,
  getMyCardById,
  getCardById,
  deleteCardById,
}

export default cardService