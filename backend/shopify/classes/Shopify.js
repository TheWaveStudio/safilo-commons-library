const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions } = require('../enums/shopify')
const { setPayload, getUri, constructGraphQLRequest } = require('../utils/shopify')
const { shopifyCall } = require('../adapters/axios')
const authMutations = require('../mutations/auth')
const checkoutMutations = require('../mutations/checkout')

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

  createCheckout (req) {
    const { url, mutation, variables } = constructGraphQLRequest(this.domain, this.version, req, checkoutMutations.checkoutCreate)

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

  loginCustomer (req) {
    const { url, mutation, variables } = constructGraphQLRequest(this.domain, this.version, req, authMutations.customerAccessTokenCreate)

    return shopifyCall(this.secretAdmin, this.storefrontToken, url, endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

}
