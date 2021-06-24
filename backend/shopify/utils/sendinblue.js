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
export const setSBPayload = (body, lists) => {
  let payload = {}

  payload.email = body.email
  deleteKeysFromObj(body, ['email'])

  payload.attributes = { ...body }
  payload.listIds = (lists.split(',')).map(i=>Number(i))
  
  return payload
}

