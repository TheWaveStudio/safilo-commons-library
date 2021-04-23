const Multipassify = require('multipassify')
import { print } from 'graphql'
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
    this.multipass = new Multipassify(this.secretMultipass)
    this.storefrontToken = storefrontToken
    this.callStore = this.generateCallStore(this.secretAdmin, this.storefrontToken)
    this.apiVersion = apiVersion
  }

  get version () {
    return apiVersions[this.apiVersion]
  }

  get url () {
    return getUri(this.domain, this.version)
  }

  createCustomer (req) {
    const url = this.url('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return this.callStore(url, endpoints.CUSTOMERS, { method: 'POST', payload })
  }

  createCheckout (req) {
    const { mutation, variables } = constructGraphQLRequest(req, checkoutMutations.checkoutCreate)

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }
  
  checkoutItemsAdd (req) {
    const { mutation } = constructGraphQLRequest(req, checkoutMutations.checkoutLineItemsAdd)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  loginCustomer (req) {
    const { mutation, variables } = constructGraphQLRequest(req, authMutations.customerAccessTokenCreate)

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  generateCallStore(secretAdmin, storefrontToken, url, param, options) {
    return (secretAdmin, storefrontToken, url, param, options)
    ? shopifyCall(secretAdmin, storefrontToken, url, param, options)
    : (url, param, options) => shopifyCall(secretAdmin, storefrontToken, url, param, options)
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

  getProducts (req){
    const url = getUri(this.domain, this.version)('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return shopifyCall(this.secretAdmin, this.storefrontToken, url, endpoints.PRODUCTS, { method: 'GET' , payload})
  }
}