const btoa = require('btoa')
const atob = require('atob')
import { endpoints } from '../enums/shopify'
/**
 * Return the Shopify endpoint to send the request to
 * @param {string} domain
 * @param {string} version
 * @param {string} key
 * @returns {string}
 */
export const getUri = (domain, version = null, key = '') => {
  const getKey = (domain, version, key) => {
    const basePath = `https://${domain}/`
    const upperKey = key.toUpperCase()
    const map = {
      ADMIN: `admin/api/${version}/`,
      LOGIN: `account/login/multipass/`,
      LANDING: `home`,
      GRAPHQL: `api/${version}/`,
      CUSTOMERS: `admin/api/${version}/${endpoints.CUSTOMERS}/`,
      ORDERS: `admin/api/${version}/${endpoints.ORDERS}/`,
      COLLECTIONS: `admin/api/${version}/${endpoints.COLLECTIONS}/`
    }
    return `${basePath}${map[upperKey]}`
  }
  return domain && version && key
    ? getKey(domain, version, key)
    : (key) => getKey(domain, version, key)
}

/**
 *
 * @param {Object} req
 * @returns {String} returns customerAccessToken
 */
export const getCustomerAccessToken = (req) => {
  return req.headers['customer-access-token']
}

/**
 *
 * @param {Object} fields
 * @param {String} type
 * @param {String} namespace
 * @returns {Array} metafields
 */
export const addMetaFields = (fields = {}, namespace) => {
  const metafields = []

  for (const field in fields) {
    metafields.push({
      key: field,
      value: fields[field],
      value_type: typeof fields[field],
      namespace
    })
  }

  return metafields
}

/**
 * 
 * @param {String} id 
 * @param {String} entity 
 * @returns encoded ID
 */
export const encodeId = (id, entity) => {
  return btoa(`gid://shopify/${entity}/${id}`)
}

/**
 * 
 * @param {String} id 
 * @param {String} entity 
 * @returns decoded ID
 */
 export const decodeId = (id) => {
  const gid = atob(id)

  return gid.match(/\w+$/)[0]
}

/**
 * 
 * @param {String} id 
 * @param {String} entity 
 * @returns admin graphQL id
 */
export const getGraphQLId = (id, entity) => {
  return `gid://shopify/${entity}/${id}`
}
