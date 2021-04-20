const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions } = require('../middleware/enums/shopify')
const { setPayload, getCustomerData } = require('../middleware/shopify')
const { shopifyCall } = require('./adapters/axios')

export class Shopify {
  constructor ({ domain, secretAdmin, secretMultipass, apiVersion = 'latest' }) {
    this.domain = domain
    this.secretAdmin = secretAdmin
    this.secretMultipass = secretMultipass
    this.apiVersion = apiVersion
    this.multipass = new Multipassify(this.secretMultipass)
  }

  get headers () {
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.secretAdmin
      }
    }
  }

  get version () {
    return apiVersions[this.apiVersion]
  }

  createCustomer (req) {
    const url = this.getEndpoint('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return shopifyCall(url, endpoints.CUSTOMERS, this.headers, 'POST', payload)
  }

  loginCustomer (req) {
    const customerData = getCustomerData(req, this.domain)
    const token = this.multipass.encode(customerData)
    return `${this.getEndpoint('login')}${token}`
  }

  getEndpoint (scope) {
    let url = `https://${this.domain}/`
    switch (scope) {
      case 'admin':
        url += `admin/api/${this.version}/`
        break
      case 'login':
        url += 'account/login/multipass/'
        break
      default:
        url += `admin/api/${this.version}/`
        break
    }
    return url
  }
}
