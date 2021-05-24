import { facebookCall } from "../adapters/axios"
import { httpMethods } from "../enums/axios"
import { getFBUri } from "../utils/facebook"

export class Facebook {
  constructor ({ token }) {
    this.token = token
  }

  getUserData () {
    const url = getFBUri('login')
    const query = this.token

    return facebookCall(url, { method: httpMethods.GET, query })
  }
}
