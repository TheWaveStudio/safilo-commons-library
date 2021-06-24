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

    await sendinblueCall(this.apiKey, url, endpoints.CONTACTS, { method: httpMethods.GET, query })
    .then((data) => { return data }, 
    (error) => console.error(error)
    );
  }
}
