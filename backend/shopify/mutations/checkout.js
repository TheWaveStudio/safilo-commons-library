import gql from 'graphql-tag'

const shippingAddress = `
  shippingAddress {
    firstName
    lastName
    address1
    city
    province
    country
    phone
    zip
  }`;

const checkout = `
  checkout {
    id
    webUrl
    ${shippingAddress}
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
      ${checkout}
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
      ${checkout}
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
        ${checkout}
        ${checkoutUserErrors}
     }
  }`

export const checkoutCustomerAssociateV2 = gql
  `mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!) {
    checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
      ${checkout}
      ${checkoutUserErrors}
      customer {
        id
      }
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
       ${checkout}
       ${checkoutUserErrors}
    }
  }`

export const checkoutCompleteFree = gql
  `mutation checkoutCompleteFree($checkoutId: ID!) {
    checkoutCompleteFree(checkoutId: $checkoutId) {
      ${checkout}
      ${checkoutUserErrors}
    }
  }`

export const checkoutShippingAddressUpdateV2 = gql
  `mutation checkoutShippingAddressUpdateV2($shippingAddress: MailingAddressInput!, $checkoutId: ID!) {
    checkoutShippingAddressUpdateV2(shippingAddress: $shippingAddress, checkoutId: $checkoutId) {
      userErrors {
        field
        message
      }
      ${checkout}
    }
  }`
