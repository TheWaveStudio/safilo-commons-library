import gql from 'graphql-tag'

export const checkoutCreate = gql
  `mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }`

