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
    limit: null,
    page_info: null,
    rel: 'next'
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
    options.payload = {query: options.graphQLQuery}
  }

  if (options.query) {
    relativeUrl += `?query=${options.query}&`
  }

  if (options.limit) {
    relativeUrl += options.query ? `limit=${options.limit}&` : `?limit=${options.limit}&`
  }

  if (options.page_info && options.rel) {
    relativeUrl += `page_info=${options.page_info}&rel=${options.rel}`
  }

  const {method, payload} = options;
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

export async function contentfulCall(
  spaceId,
  accessToken,
  options = {
    method: httpMethods.POST,
    payload: {},
    query: null,
    graphQLQuery: null,
    mutation: null,
    variables: null,
  }
) {
  const contentfulHttp = axios.create({
    baseURL: 'https://graphql.contentful.com/content/v1/spaces/',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
  })

  if (options.query && options.variables) {
    options.payload = {query: options.query, variables: options.variables}
  }

  const {method, payload} = options;

  return await contentfulHttp[method]?.(spaceId, payload)
}

export async function sendinblueCall(
  apiKey,
  url,
  param,
  options = {
    method: httpMethods.GET,
    payload: {},
    query: null,
  }
) {
  const sendinblueHttp = axios.create({
    baseURL: url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey
    },
  })

  if (options.query) {
    param += `/${options.query}`
  }

  if (options.payload) {
    options.payload = JSON.stringify(options.payload)
  }

  const {method, payload} = options;

  return await sendinblueHttp[method]?.(param, payload)
}
