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

  const {method, payload} = options;
  return await shopifyHttp[method.toLowerCase()]?.(relativeUrl, payload)
}
