import gql from 'graphql-tag'
const checkout = `
  checkout{
    id
    webUrl
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          quantity
          variant{
            id 
            price
            image {
              altText
              originalSrc
              transformedSrc
            }
          }
        }
      }
    }
  }`;

const checkoutUserErrors = `
  checkoutUserErrors{
    code
    field
    message
  }`;


/**
 * Create checkout mutation
 * @$input {CheckoutCreateInput} payload
 * @returns graph-tag
 */
export const checkoutCreate = gql
  `mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      ${checkout},
      ${checkoutUserErrors}
    }
  }`

/**
 * Add line to checkout mutation
 * @$lineItems [CheckoutLineItemInput!] lines to add to checkout
 * @$checkoutId ID checkout id (btoa(id) format)
 * @returns graph-tag
 */
export const checkoutLineItemsAdd = gql
  `mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
    checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
      ${checkout},
      ${checkoutUserErrors}
    }
  }`

/**
 * Update line to checkout mutation
 * @$lineItems [CheckoutLineItemInput!] lines to add to checkout
 * @$checkoutId ID checkout id (btoa(id) format)
 * @returns graph-tag
 */
export const checkoutLineItemsUpdate = gql
  `mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
        ${checkout},
        ${checkoutUserErrors}
     }
  }`

/**
 * Remove line from checkout mutation
 * @$lineItemIds [ID] lines id to remove from checkout (btoa(id) format)
 * @$checkoutId ID checkout id (btoa(id) format)
 * @returns graph-tag
 */
export const checkoutLineItemsRemove = gql
  `mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
     checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
       ${checkout},
       ${checkoutUserErrors}
    }
  }`
