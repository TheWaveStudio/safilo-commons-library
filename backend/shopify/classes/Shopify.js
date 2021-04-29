const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions } = require('../enums/shopify')
const { setPayload, getUri, constructGraphQLRequest, getCustomerAccessToken, printRawMutation } = require('../utils/shopify')
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
    this.url = getUri(this.domain, this.version)
  }

  get version () {
    return apiVersions[this.apiVersion]
  }

  createCustomer (req) {
    const url = this.url('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return this.callStore(url, endpoints.CUSTOMERS, { method: 'POST', payload })
  }

  async createCheckout (req) {
    const { mutation, variables } = constructGraphQLRequest(req.body, checkoutMutations.checkoutCreate)

    const checkout = await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
    
    const customerAccessToken = getCustomerAccessToken(req)
    if (customerAccessToken) { await this.associateCheckoutToCustomer(checkout, customerAccessToken) }

    return checkout
  }

  checkoutItemsAdd (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutLineItemsAdd)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  async associateCheckoutToCustomer (checkout, customerAccessToken) {
    const mutation = printRawMutation(checkoutMutations.checkoutCustomerAssociateV2)
    const variables = { 
      checkoutId: checkout?.data?.data?.checkoutCreate?.checkout?.id, 
      customerAccessToken
    }

    return await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  checkoutShippingAddressUpdate (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutShippingAddressUpdateV2)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  checkoutCompleteFree (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutCompleteFree)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  loginCustomer (req) {
    const { mutation, variables } = constructGraphQLRequest(req.body, authMutations.customerAccessTokenCreate)
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  loginWithMultipass (req) {
    return this.callStore(this.getLoginWithTokenURI(req))
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