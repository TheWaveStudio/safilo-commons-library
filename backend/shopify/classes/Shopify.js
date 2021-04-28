const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions } = require('../enums/shopify')
const { setPayload, getUri, constructGraphQLRequest } = require('../utils/shopify')
const { shopifyCall } = require('../adapters/axios')
const authMutations = require('../mutations/auth')
const checkoutMutations = require('../mutations/checkout')

/**
 * Shopify class
 * @domain String domain
 * @secretAdmin String secretAdmin
 * @secretMultipass String secretMultipass
 * @storefrontToken String storefrontToken
 * @apiVersion String apiVersion
 * @returns Shopify instance
 */
export class Shopify {
  constructor ({ domain, secretAdmin, secretMultipass, storefrontToken, apiVersion = 'latest' }) {
    this.domain = domain
    this.secretAdmin = secretAdmin
    this.secretMultipass = secretMultipass
    this.multipass = new Multipassify(this.secretMultipass)
    this.storefrontToken = storefrontToken
    this.callStore = this.generateCallStore(this.secretAdmin, this.storefrontToken)
    this.apiVersion = apiVersion
    this.url = getUri(this.domain, this.version)
  }

  get version () {
    return apiVersions[this.apiVersion]
  }

  /**
   * CreateCustomer function
   * @req request
   * @returns Promise response
   */
  createCustomer (req) {
    const url = this.url('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return this.callStore(url, endpoints.CUSTOMERS, { method: 'POST', payload })
  }

  /**
   * CreateCheckout function
   * @req request
   * @returns Promise response
   */
  createCheckout (req) {
    const { mutation, variables } = constructGraphQLRequest(req, checkoutMutations.checkoutCreate)
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * CheckoutItemsAdd function
   * @req request
   * @returns Promise response
   */
  checkoutItemsAdd (req) {
    const { mutation } = constructGraphQLRequest(req, checkoutMutations.checkoutLineItemsAdd)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * CheckoutItemsUpdate function
   * @req request
   * @returns Promise response
   */
  checkoutItemsUpdate (req) {
    const { mutation } = constructGraphQLRequest(req, checkoutMutations.checkoutLineItemsUpdate)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * CheckoutItemsRemove function
   * @req request
   * @returns Promise response
   */
  checkoutItemsRemove (req) {
    const { mutation } = constructGraphQLRequest(req, checkoutMutations.checkoutLineItemsRemove)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * LoginCustomer function
   * @req request
   * @returns Promise response
   */
  loginCustomer (req) {
    const { mutation, variables } = constructGraphQLRequest(req, authMutations.customerAccessTokenCreate)
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * LoginWithMultipass function
   * @req request
   * @returns Promise response
   */
  loginWithMultipass (req) {
    return this.callStore(this.getLoginWithTokenURI(req))
  }

  /**
   * GenerateCallStore function
   * @req request
   * @returns Promise response
   */
  generateCallStore(secretAdmin, storefrontToken, url, param, options) {
    return (secretAdmin, storefrontToken, url, param, options)
      ? shopifyCall(secretAdmin, storefrontToken, url, param, options)
      : (url, param, options) => shopifyCall(secretAdmin, storefrontToken, url, param, options)
  }

  /**
   * GetLoginWithTokenURI function
   * @req request
   * @returns Promise response
   */
  getLoginWithTokenURI (req) {
    const customerData = {
      email: req.body.email,
      remote_ip: req.ip,
    }
    const token = this.multipass.encode(customerData)
    return `${getUri(this.domain)('login')}${token}`
  }

  /**
   * GetProducts function
   * @req request
   * @returns Promise response
   */
  getProducts (req){
    const url = getUri(this.domain, this.version)('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return shopifyCall(this.secretAdmin, this.storefrontToken, url, endpoints.PRODUCTS, { method: 'GET' , payload})
  }
}
