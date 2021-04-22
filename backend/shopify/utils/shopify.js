/**
 * Set payload object based on the entity 
 * @param {string} entity 
 * @param {Object} payload 
 * @returns {Object}
 */
export const setPayload = (entity, payload) => {
  return { [entity]: payload }
}

/**
 * Set the variables to be sent for the GraphQL mutation
 * @param {Object} payload 
 * @returns {Object}
 */
export const setVariables = (payload) => {
  return {
    input: payload 
    }
}

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
    const upperKey = key.toUpperCase();
    const map = {
      ADMIN: `admin/api/${version}/`,
      LOGIN: `account/login/multipass/`,
      LANDING: `home`,
      GRAPHQL: `api/${version}/`,
    };
    return `${basePath}${map[upperKey]}`
  }
  return (domain && version && key)
    ? getKey(domain, version, key)
    : (key) => getKey(domain, version, key);
}