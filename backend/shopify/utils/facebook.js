import { print } from 'graphql' 

/**
 * Return the Facebook endpoint to send the request to
 * @param {string} key
 * @returns {string}
 */
export const getFBUri = (key = '') => {
    const basePath = `https://graph.facebook.com/`
    const upperKey = key.toUpperCase()
    const map = {
      LOGIN: `me?fields=id,email,first_name,last_name,verified&access_token=`,
    }

    return `${basePath}${map[upperKey]}`
}
