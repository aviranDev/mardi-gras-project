import httpService from "./httpService";
import configData from "../config.json"

export function sendContactFrom(form) {
  return httpService.post(`${configData.apiUrl}/contact/contact-us`, form);
}



const contactService = {
  sendContactFrom,
}

export default contactService