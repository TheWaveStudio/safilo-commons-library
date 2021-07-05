import { deleteKeysFromObj } from "../../commons/utils/commons"

/**
 * Return the Sendinblue endpoint to send the request to
 * @param {string} key
 * @returns {string}
 */
export const getSBUri = (key = '') => {
    const basePath = 'https://api.sendinblue.com/'
    const upperKey = key.toUpperCase()
    const map = {
      V3: 'v3/',
    }

    return `${basePath}${map[upperKey]}`
}

/**
 * 
 * @param {Object} body 
 * @param {String} lists 
 * @returns {Object} formatted payload
 */
export const setSBPayload = (body, lists = []) => {
  let payload = {}

  if (body.email) {
    payload.email = body.email
    deleteKeysFromObj(body, ['email'])
  }

  for (const [key, value] of Object.entries(body)) {
    const newKey = camelToSnakeCase(key)
    body[newKey] = value
  }

  payload.attributes = { ...body }

  if (lists.length) {
    payload.listIds = (lists.split(',')).map(i=>parseInt(i))
  }
  
  return payload
}

export const camelToSnakeCase = (text) => {
  return text.replace(/(.)([A-Z][a-z]+)/, '$1_$2').replace(/([a-z0-9])([A-Z])/, '$1_$2').toLowerCase()
}