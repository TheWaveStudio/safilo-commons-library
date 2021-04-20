const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions } = require('../middleware/enums/shopify')
const { setPayload, getUri } = require('../middleware/shopify')
const { shopifyCall } = require('./adapters/axios')

export class Shopify {
  constructor ({ domain, secretAdmin, secretMultipass, apiVersion = 'latest' }) {
    this.domain = domain
    this.secretAdmin = secretAdmin
    this.secretMultipass = secretMultipass
    this.apiVersion = apiVersion
    this.multipass = new Multipassify(this.secretMultipass)
  }

  get version () {
    return apiVersions[this.apiVersion]
  }

  createCustomer (req) {
    const url = getUri(this.domain, this.version)('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return shopifyCall(this.secretAdmin, url, endpoints.CUSTOMERS, 'POST', payload)
  }

  getLoginWithTokenURI (req) {
    const customerData = {
      email: req.body.email,
      remote_ip: req.ip,
      return_to: getUri(this.domain)('landing')
    }
    const token = this.multipass.encode(customerData)
    return `${getUri(this.domain)('login')}${token}`
  }
}
