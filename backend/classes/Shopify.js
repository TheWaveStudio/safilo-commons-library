const Multipassify = require('multipassify')
import { print } from 'graphql' 
const { endpoints, entities, apiVersions } = require('../middleware/enums/shopify')
const { setPayload, setVariables, getUri } = require('../middleware/shopify')
const { shopifyCall } = require('./adapters/axios')
const mutations = require('../mutations/mutations')

export class Shopify {
  constructor ({ domain, secretAdmin, secretMultipass, storefrontToken, apiVersion = 'latest' }) {
    this.domain = domain
    this.secretAdmin = secretAdmin
    this.secretMultipass = secretMultipass
    this.storefrontToken = storefrontToken
    this.apiVersion = apiVersion
    this.multipass = new Multipassify(this.secretMultipass)
  }

  get version () {
    return apiVersions[this.apiVersion]
  }

  createCustomer (req) {
    const url = getUri(this.domain, this.version)('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return shopifyCall(this.secretAdmin, this.storefrontToken, url, endpoints.CUSTOMERS, { method: 'POST', payload })
  }

  loginCustomer (req) {
    const url = getUri(this.domain, this.version)('graphql')
    const mutation = print(mutations.customerAccessTokenCreate)
    const variables = setVariables(req.body)
    return shopifyCall(this.secretAdmin, this.storefrontToken, url, endpoints.GRAPHQL, { method: 'POST', mutation, variables })
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
