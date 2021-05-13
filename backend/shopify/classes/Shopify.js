const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions } = require('../enums/shopify')
const { setPayload, getUri, constructGraphQLRequest, getCustomerAccessToken, printRawMutation, addMetaFields } = require('../utils/shopify')
const { shopifyCall } = require('../adapters/axios')
const authMutations = require('../mutations/auth')
const checkoutMutations = require('../mutations/checkout')
const authQuery = require('../query/auth')


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

  // Auth
  /**
   * CreateCustomer function
   * @req request
   * @returns Promise response
   */
  createCustomer (req) {
    const { birthDate, gender } = req.body
    delete req.body.birthDate
    delete req.body.gender

    const metaFields = { birthDate, gender }
    req.body.metafields = addMetaFields(metaFields, 'string', 'customer')
    let payload = setPayload(entities.CUSTOMER, req.body)

    return this.callStore(this.url('admin'), endpoints.CUSTOMERS, { method: 'POST', payload })
  }

  /**
   * LoginCustomer function
   * @req request
   * @returns Promise response
   */
  loginCustomer (req) {
    const { mutation, variables } = constructGraphQLRequest(req.body, authMutations.customerAccessTokenCreate)
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
   * renewAccessToken function
   * @req request
   * @returns Promise response
   */
  async renewAccessToken (req) {
    const mutation = printRawMutation(authMutations.customerAccessTokenRenew)
    const variables = { customerAccessToken: getCustomerAccessToken(req) }

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables})
  }

  /**
   * getCustomer function
   * @req request
   * @returns Promise response
   */
  getCustomer(customerAccessToken) {
    const {mutation} = constructGraphQLRequest({customerAccessToken}, authQuery.getCustomer)
    const variables = {customerAccessToken: customerAccessToken}
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, {method: 'POST', mutation, variables})
  }

  /**
   * customerRecover function: Sends a reset password email to the customer
   * @req request
   * @returns Promise response
   */
  customerRecover(req) {
    const { mutation } = constructGraphQLRequest(req.body, authMutations.customerRecover)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }
  
  /**
   * customerReset function: Resets a customer’s password
   * @req request
   * @returns Promise response
   */
  customerReset(req) {
    const { mutation } = constructGraphQLRequest(req.body, authMutations.customerReset)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  // Checkout
  async associateCheckoutToCustomer (checkout, customerAccessToken) {
    const mutation = printRawMutation(checkoutMutations.checkoutCustomerAssociateV2)
    const variables = {
      checkoutId: checkout?.data?.data?.checkoutCreate?.checkout?.id,
      customerAccessToken
    }

    return await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * CreateCheckout function
   * @req request
   * @returns Promise response
   */
  async createCheckout (req) {
    const { mutation, variables } = constructGraphQLRequest(req.body, checkoutMutations.checkoutCreate)

    const checkout = await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })

    const customerAccessToken = getCustomerAccessToken(req)
    if (customerAccessToken) { await this.associateCheckoutToCustomer(checkout, customerAccessToken) }

    return checkout
  }

  /**
   * CheckoutItemsAdd function
   * @req request
   * @returns Promise response
   */
  checkoutItemsAdd (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutLineItemsAdd)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * CheckoutItemsUpdate function
   * @req request
   * @returns Promise response
   */
  checkoutItemsUpdate (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutLineItemsUpdate)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: 'POST', mutation, variables })
  }

  /**
   * CheckoutItemsRemove function
   * @req request
   * @returns Promise response
   */
  checkoutItemsRemove (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutLineItemsRemove)
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

  // Products
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

  // Orders
  cancelOrder (req) {
    const { id } = req.query
    const url = `${this.url('orders')}/${id}/`
    const payload = req.body

    return this.callStore(url, endpoints.ORDER_CANCEL, { method: 'POST', payload })
  }

  closeOrder (req) {
    const { id } = req.body
    const url = `${this.url('orders')}/${id}/`

    return this.callStore(url, endpoints.ORDER_CLOSE, { method: 'POST' })
  }

  deleteOrder (req) {
    const { id } = req.body

    return this.callStore(this.url('orders'), id, { method: 'DELETE'})
  }

  getUserOrders (req) {
    const { userId } = req.query
    const url = `${this.url('customers')}/${userId}`

    return this.callStore(url, endpoints.ORDERS)
  }

  getOrderById (req) {
    const { id } = req.query

    return this.callStore(this.url('orders'), id)
  }

  getOrders (req) {
    return this.callStore(this.url('admin'), endpoints.ORDERS)
  }

  reOpenOrder (req) {
    const { id } = req.body
    const url = `${this.url('orders')}/${id}/`

    return this.callStore(url, endpoints.ORDER_OPEN, { method: 'POST' })
  }

  updateOrder (req) {
    const { id } = req.body
    const payload = setPayload(entities.ORDER, req.body)

    return this.callStore(this.url('orders'), id, { method: 'PUT', payload})
  }

  // Internal
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
}
