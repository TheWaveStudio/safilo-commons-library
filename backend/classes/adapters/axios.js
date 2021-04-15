const axios = require('axios')

module.exports.shopifyCall = async (url, headers, HTTP = 'GET', body = {}) => {
    return new Promise(async function (resolve, reject) {
        try {
            let response;
            if (HTTP == 'POST') {
                response = await axios.post(url, body, headers);
            } else {
                response = await axios.get(url, config);
            }
            return resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};