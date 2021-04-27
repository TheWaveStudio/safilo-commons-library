import gql from 'graphql-tag'

export const checkoutCreate = gql
  `mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }`

export const checkoutLineItemsAdd = gql
  `mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
    checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
      checkout {
        id
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }`

  export const checkoutCustomerAssociateV2 = gql
  `mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!) {
    checkoutCustomerAssociateV2(
      checkoutId: $checkoutId
      customerAccessToken: $customerAccessToken
    ) {
      checkout {
        id
      }
      checkoutUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }`
