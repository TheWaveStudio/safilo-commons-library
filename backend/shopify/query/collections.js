import gql from 'graphql-tag'

export const getCollections = gql
`{
  collections(first: 10) {
    edges { 
      node { 
        description
        descriptionHtml
        handle
        id
        image {
          id
          originalSrc
        }
        legacyResourceId
        productsCount
        ruleSet {
          rules {
            condition
          }
        }
        sortOrder
        storefrontId
        title
        updatedAt
      } 
    }
  }
}`

export const getCollectionsbyIds = gql `
  query nodes($ids: [ID!]!) {
    nodes(ids: $ids) {
      ...on Collection {
        description
        descriptionHtml
        handle
        id
        image {
          id
          originalSrc
        }
        legacyResourceId
        productsCount
        ruleSet {
          rules {
            condition
          }
        }
        sortOrder
        storefrontId
        title
        updatedAt
        products(first: 50) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }`
