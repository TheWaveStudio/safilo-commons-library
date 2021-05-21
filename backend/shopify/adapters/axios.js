import { httpMethods } from '../enums/axios'

const axios = require('axios')

export async function shopifyCall(
  secretAdmin,
  storefrontToken,
  url,
  param,
  options = {
    method: httpMethods.GET,
    payload: {},
    query: null,
    graphQLQuery: null,
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

  if (options.graphQLQuery) {
    options.payload = {query: options.query}
  }
  
  if (options.query) {
    relativeUrl += `?query=${options.query}`
  }

  const {method, payload} = options;
  console.log(method)
  return await shopifyHttp[method]?.(relativeUrl, payload)
}

export async function facebookCall(
  url,
  options = {
    method: httpMethods.GET,
    payload: {},
    query: null,
  }
) {

  if (options.query) {
    url += options.query
  }

  const {method, payload} = options;

  return await axios[method]?.(url, payload)
}
