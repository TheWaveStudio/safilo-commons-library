const { print } = require('graphql')

/**
 *
 * @param {Object}
 * @param {Array} of obj's keys
 * @returns {Object} obj
 */
export const deleteKeysFromObj = (obj, keys = []) => {
  keys.forEach((key) => {
    delete obj[key]
  })

  return obj
}

/**
 *
 * @param {string} domain
 * @param {string} version
 * @param {Object} req
 * @param {string} rawMutation
 * @returns {Object} return url, printedMutation and variables
 */
export const constructGraphQLRequest = (payload, rawMutation) => {
  const mutation = printRawMutation(rawMutation)
  const variables = setVariables(payload)

  return { mutation, variables }
}

/**
 *
 * @param {String} rawMutation
 * @returns printed mutation
 */
export const printRawMutation = rawMutation => print(rawMutation)

/**
 * Set payload object based on the entity
 * @param {string} entity
 * @param {Object} payload
 * @returns {Object}
 */
export const setPayload = (entity, payload) => ({ [entity]: payload })

/**
 * Set the variables to be sent for the GraphQL mutation
 * @param {Object} payload
 * @returns {Object}
 */
export const setVariables = payload => ({
  input: payload
})

export const setQueryParams = (params) => {
  let query = ''
  for (let [key, value] of Object.entries(params)) {
    query += `${key}=${value}&`
  }

  return query
}