const axios = require('axios')

export async function shopifyCall(
  secretAdmin,
  storefrontToken,
  url,
  param,
  options = {
    method: 'GET',
    payload: {},
    query: null,
    mutation: null,
    variables: null,
  }
) {
  const shopifyHttp = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': secretAdmin,
      'X-Shopify-Storefront-Access-Token': storefrontToken,
    },
  })
  let relativeUrl = `${param}.json`

  if (options.mutation && options.variables) {
    options.payload = {query: options.mutation, variables: options.variables}
  }

  let response
  switch (options.method) {
    case 'GET':
      response = await shopifyHttp.get(relativeUrl)
      break
    case 'POST':
      response = await shopifyHttp.post(relativeUrl, options.payload)
      break
    case 'PUT':
      response = await shopifyHttp.put(relativeUrl, options.payload)
      break
    case 'DELETE':
      response = await shopifyHttp.delete(relativeUrl, options.payload)
      break

    default:
      response = await shopifyHttp.get(relativeUrl)
      break
  }
  return response
}
