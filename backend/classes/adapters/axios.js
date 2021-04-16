const axios = require('axios')

export async function shopifyCall (url, param, headers, HTTP = 'GET', body = {}) {
  const shopifyHttp = axios.create({
    baseURL: url,
    ...headers
  })
  let response
  switch (HTTP) {
    case 'GET':
      response = await shopifyHttp.get(param)
      break
    case 'POST':
      response = await shopifyHttp.post(param, body)
      break
    case 'PUT':
      response = await shopifyHttp.put(param, body)
      break
    case 'DELETE':
      response = await shopifyHttp.delete(param, body)
      break

    default:
      response = await shopifyHttp.get(param)
      break
  }
  return response
}
