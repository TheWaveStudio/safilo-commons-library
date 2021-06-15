const btoa = require('btoa')
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
export const addMetaFields = (fields = {}, type, namespace) => {
  const metafields = []

  for (const field in fields) {
    metafields.push({
      key: field,
      value: fields[field],
      value_type: type,
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
