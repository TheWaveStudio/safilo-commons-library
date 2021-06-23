import { facebookCall } from "../../commons/adapters/axios"
import { httpMethods } from "../../commons/enums/axios"
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
