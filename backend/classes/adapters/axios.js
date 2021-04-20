const axios = require('axios')

export async function shopifyCall (secretAdmin, url, param, HTTP = 'GET', body = {}) {
  const shopifyHttp = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': secretAdmin
    }
  })
  const relativeUrl = `${param}.json`
  let response
  switch (HTTP) {
    case 'GET':
      response = await shopifyHttp.get(relativeUrl)
      break
    case 'POST':
      response = await shopifyHttp.post(relativeUrl, body)
      break
    case 'PUT':
      response = await shopifyHttp.put(relativeUrl, body)
      break
    case 'DELETE':
      response = await shopifyHttp.delete(relativeUrl, body)
      break

    default:
      response = await shopifyHttp.get(relativeUrl)
      break
  }
  return response
}
