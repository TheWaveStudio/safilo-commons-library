const { endpoints, entities, apiVersions } = require('../middleware/enums/shopify')
const { setPayload } = require('../middleware/shopify')
const { shopifyCall } = require('./adapters/axios')

export class Shopify {
  constructor ({ domain, secret, req, apiVersion = 'latest' }) {
    this.domain = domain
    this.secret = secret
    this.req = req
    this.api = null
    this.apiVersion = apiVersion
  }

  get endpoint () {
    return `https://${this.domain}/admin/api/${this.version}/`
  }

  get headers () {
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.secret
      }
    }
  }

  get version () {
    return apiVersions[this.apiVersion]
  }

  createCustomer () {
    this.api = endpoints.CUSTOMERS
    const url = this.endpoint
    const customer = setPayload(entities.CUSTOMER, this.req.body)
    const headers = this.headers
    return shopifyCall(url, this.api, headers, 'POST', customer)
  }

  loginCustomer () {

  }
}
