/**
 * 
 * @param {Object} 
 * @param {Array} of obj's keys 
 * @returns {Object} obj
 */
  export const deleteKeysFromObj = (obj, keys = []) => {
    keys.forEach(key => {
        delete obj[key]
    })

    return obj
  }