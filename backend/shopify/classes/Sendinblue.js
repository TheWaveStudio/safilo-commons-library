import { httpMethods } from "../../commons/enums/axios"
import { getSBUri, setSBPayload } from "../utils/sendinblue"
import { endpoints } from "../enums/sendinblue"
import { sendinblueCall } from "../../commons/adapters/axios"

export class Sendinblue {
  constructor ({ apiKey, lists }) {
    this.apiKey = apiKey
    this.lists = lists
  }

  createContact (payload) {
    const url = getSBUri('v3')
    payload = setSBPayload(payload, this.lists)

    return sendinblueCall(this.apiKey, url, endpoints.CONTACTS, { method: httpMethods.POST, payload })
  }

  async getContact (query) {
    const url = getSBUri('v3')

    try {
      return (await sendinblueCall(this.apiKey, url, endpoints.CONTACTS, { method: httpMethods.GET, query })).data
    } catch (error) {
      console.error(error)
    }
  }

  updateContact (customer, payload) {
    const url = getSBUri('v3')
    const query = customer.email
    payload = setSBPayload(payload)

    return sendinblueCall(this.apiKey, url, endpoints.CONTACTS, { method: httpMethods.PUT, query, payload})
  }

  deleteContact (customer) {
    const url = getSBUri('v3')
    const query = customer.email
    
    return sendinblueCall(this.apiKey, url, endpoints.CONTACTS, { method: httpMethods.DELETE, query})
  }
}
