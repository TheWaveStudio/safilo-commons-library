const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions, uri } = require('../middleware/enums/shopify')
const { setPayload } = require('../middleware/shopify')
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
    const url = uri(this.domain, this.version).ADMIN
    const payload = setPayload(entities.CUSTOMER, req.body)
    return shopifyCall(this.secretAdmin, url, endpoints.CUSTOMERS, 'POST', payload)
  }

  getLoginWithTokenURI (req) {
    const customerData = {
      email: req.body.email,
      remote_ip: req.ip,
      return_to: uri(this.domain).LANDING
    }
    const token = this.multipass.encode(customerData)
    return `${uri(this.domain).LOGIN}${token}`
  }
}
