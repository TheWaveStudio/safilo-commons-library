import { httpMethods } from '../../commons/enums/axios'
import { deleteKeysFromObj, constructGraphQLRequest,printRawMutation,setPayload } from '../../commons/utils/commons'
const Multipassify = require('multipassify')
const { endpoints, entities, apiVersions } = require('../enums/shopify')
const { getUri, getCustomerAccessToken, addMetaFields, encodeId, decodeId, getGraphQLId } = require('../utils/shopify')
const { shopifyCall } = require('../../commons/adapters/axios')
const authMutations = require('../mutations/auth')
const checkoutMutations = require('../mutations/checkout')
const authQuery = require('../query/auth')
const collectionsQuery = require('../query/collections')

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
    const { birthDate, gender, facebookId, googleId } = req.body

    const keys = ['birthDate', 'gender', 'facebookId', 'googleId']
    req.body = deleteKeysFromObj(req.body, keys)

    const metaFields = { birthDate, gender, facebookId, googleId }
    req.body.metafields = addMetaFields(metaFields, 'string', 'customer')
    let payload = setPayload(entities.CUSTOMER, req.body)

    return this.callStore(this.url('admin'), endpoints.CUSTOMERS, { method: httpMethods.POST, payload })
  }
  
  /**
   * customerActivate function
   * @req request
   * @returns Promise response
   */
   customerActivate (req) {
    const id = encodeId(req.body.id, 'Customer')
    req.body = deleteKeysFromObj(req.body, ['id'])

    let { mutation, variables } = constructGraphQLRequest(req.body, authMutations.customerActivate)
    variables = { id, ...variables }
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
 }

  /**
   * customerAccessTokenCreate function - Login customer
   * @req request
   * @returns Promise response
   */
   customerAccessTokenCreate (req) {
    const { mutation, variables } = constructGraphQLRequest(req.body, authMutations.customerAccessTokenCreate)
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
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
   * customerAccessTokenCreateWithMultipass function
   * @req request
   * @returns Promise response
  */
  customerAccessTokenCreateWithMultipass (email) {
    const mutation = printRawMutation(authMutations.customerAccessTokenCreateWithMultipass)

    const token = this.multipass.encode({ email })
    const variables = {multipassToken: token}

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  /**
   * renewAccessToken function
   * @req request
   * @returns Promise response
   */
  async customerAccessTokenRenew (req) {
    const mutation = printRawMutation(authMutations.customerAccessTokenRenew)
    const variables = { customerAccessToken: getCustomerAccessToken(req) }

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables})
  }

  /**
   * getCustomer function
   * @req request
   * @returns Promise response
   */
  getCustomer(customerAccessToken) {
    const {mutation} = constructGraphQLRequest({customerAccessToken}, authQuery.getCustomer)
    const variables = { customerAccessToken }

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, {method: httpMethods.POST, mutation, variables})
  }

  async getCustomerMetafields(customer) {
    const customerId = decodeId(customer.id)

    const param = `${customerId}/${endpoints.METAFIELDS}`
    const { metafields } = (await this.callStore(this.url('customers'), param)).data
    let mappedMetafields = {}
    metafields.map(metafield => {
      mappedMetafields[metafield['key']] = metafield['value']
    })

    return mappedMetafields
  }

  /**
   * searchCustomerByQuery function
   * @req request
   * @returns Promise response
   */
   searchCustomerByQuery(query) {
    return this.callStore(this.url('customers'), endpoints.SEARCH, { method: httpMethods.GET, query: query})
  }

  /**
   * customerRecover function: Sends a reset password email to the customer
   * @req request
   * @returns Promise response
   */
  customerRecover(req) {
    const { mutation } = constructGraphQLRequest(req.body, authMutations.customerRecover)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  /**
   * customerReset function: Resets a customer’s password
   * @req request
   * @returns Promise response
   */
  customerReset(req) {
    const { mutation } = constructGraphQLRequest(req.body, authMutations.customerReset)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  /**
   * customerAccessTokenDelete function: Delete permanently customerAccessToken
   * @req request
   * @returns Promise response
   */
   customerAccessTokenDelete(req) {
    const { mutation } = constructGraphQLRequest(req.body, authMutations.customerAccessTokenDelete)
    const variables = {customerAccessToken: req.headers['customer-access-token']}

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  /**
   * customerUpdate function
   * @req request
   * @returns Promise response
   */
  async customerUpdate(req) {
    const { gender, birthDate } = req.body
    const keys = ['birthDate', 'gender']
    req.body = deleteKeysFromObj(req.body, keys)

    const { mutation } = constructGraphQLRequest(req.body, authMutations.customerUpdate)
    let variables = setPayload(entities.CUSTOMER, req.body)
    variables.customerAccessToken = req.headers['customer-access-token']

    const response = await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })

    const { data, errors } = response?.data

    if (!data.customerUpdate) throw errors

    if (gender || birthDate) {
    await this.updateCustomerMetafields(data.customerUpdate.customer, keys, { birthDate, gender })
    }

    return response
  }

/**
 * updateCustomerMetafields function
 * @param {Object} customer 
 * @param {Array} keys 
 * @param {Array} values 
 */
  async updateCustomerMetafields (customer, keys, values) {
    const customerId = decodeId(customer.id)

    let param = `${customerId}/${endpoints.METAFIELDS}`

    keys.map(async key => {
      const payload = { metafield: {key, value: values[key], namespace: entities.CUSTOMER, "value_type": typeof(values[key]) }}
      return await this.updateMetafield(param, endpoints.CUSTOMERS, payload)
    })
  }

  /**
   * updateMetafield function
   * @param {String} param 
   * @param {String} endpoint 
   * @param {Object} payload 
   * @returns Promise response
   */
  updateMetafield (param, endpoint, payload) {
    return this.callStore(this.url(endpoint), param, { method: httpMethods.POST, payload})
  } 

  /**
   * customerDelete function
   * @param {Object} req 
   * @returns Promise response
   */
  async customerDelete (req) {
    const id = decodeId(req.body.id)
    return this.callStore(this.url('customers'), id, { method: httpMethods.DELETE })
  }

  // Checkout
  async associateCheckoutToCustomer (checkout, customerAccessToken) {
    const mutation = printRawMutation(checkoutMutations.checkoutCustomerAssociateV2)
    const variables = {
      checkoutId: checkout?.data?.data?.checkoutCreate?.checkout?.id,
      customerAccessToken
    }

    return await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  /**
   * CreateCheckout function
   * @req request
   * @returns Promise response
   */
  async createCheckout (req) {
    const { mutation, variables } = constructGraphQLRequest(req.body, checkoutMutations.checkoutCreate)

    const checkout = await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })

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
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  /**
   * CheckoutItemsUpdate function
   * @req request
   * @returns Promise response
   */
  checkoutItemsUpdate (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutLineItemsUpdate)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  /**
   * CheckoutItemsRemove function
   * @req request
   * @returns Promise response
   */
  checkoutItemsRemove (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutLineItemsRemove)
    const variables = req.body
    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  async associateCheckoutToCustomer (checkout, customerAccessToken) {
    const mutation = printRawMutation(checkoutMutations.checkoutCustomerAssociateV2)
    const variables = {
      checkoutId: checkout?.data?.data?.checkoutCreate?.checkout?.id,
      customerAccessToken
    }

    return await this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  checkoutShippingAddressUpdate (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutShippingAddressUpdateV2)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  checkoutCompleteFree (req) {
    const { mutation } = constructGraphQLRequest(req.body, checkoutMutations.checkoutCompleteFree)
    const variables = req.body

    return this.callStore(this.url('graphql'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
  }

  // Collections
  getCollections (req){
    let { ids } = req.query

    if (ids) {
      const graphQLIds = []
      ids.split(',').map(id => { graphQLIds.push(getGraphQLId(id, entities.COLLECTION)) })
      const variables = { ids: graphQLIds}
      const mutation = printRawMutation(collectionsQuery.getCollectionsbyIds)

      return this.callStore(this.url('admin'), endpoints.GRAPHQL, { method: httpMethods.POST, mutation, variables })
    }

    const graphQLQuery = printRawMutation(collectionsQuery.getCollections)

    return this.callStore(this.url('admin'), endpoints.GRAPHQL, { method: httpMethods.POST, graphQLQuery })
  }

  getCollectionProducts (req){
    const { legacyResourceId } = req.query
    const url = `${this.url('collections')}/${legacyResourceId}/`

    return this.callStore(url, endpoints.PRODUCTS)
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
    return shopifyCall(this.secretAdmin, this.storefrontToken, url, endpoints.PRODUCTS, { method: httpMethods.GET , payload})
  }

  // Orders
  cancelOrder (req) {
    const { id } = req.query
    const url = `${this.url('orders')}/${id}/`
    const payload = req.body

    return this.callStore(url, endpoints.ORDER_CANCEL, { method: httpMethods.POST, payload })
  }

  closeOrder (req) {
    const { id } = req.body
    const url = `${this.url('orders')}/${id}/`

    return this.callStore(url, endpoints.ORDER_CLOSE, { method: httpMethods.POST })
  }

  deleteOrder (req) {
    const { id } = req.body

    return this.callStore(this.url('orders'), id, { method: httpMethods.DELETE})
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

    return this.callStore(url, endpoints.ORDER_OPEN, { method: httpMethods.POST })
  }

  updateOrder (req) {
    const { id } = req.body
    const payload = setPayload(entities.ORDER, req.body)

    return this.callStore(this.url('orders'), id, { method: httpMethods.PUT, payload})
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


  //SHOP
  /**
   * GetStoreInfo function
   * @req request
   * @returns Promise response
   */
  getStoreInfo (req){
    const url = getUri(this.domain, this.version)('admin')
    const payload = setPayload(entities.CUSTOMER, req.body)
    return shopifyCall(this.secretAdmin, this.storefrontToken, url, endpoints.SHOP, { method: 'GET' , payload})
  }
}
