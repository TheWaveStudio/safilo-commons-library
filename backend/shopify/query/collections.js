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