const { shopifyCall } = require('./adapters/axios')
const { endpoints, entities } = require('safilo-commons/backend/middleware/enums/shopify')
const {setPayload} = require('../middleware/shopify')

export class Shopify {
    constructor({ domain: domain, secret: secret, req: req }) {
      this.domain = domain;
      this.secret = secret;
      this.req = req;
      this.api = null
    }
  
    get endpoint() {
        return `https://${this.domain}/admin/api/2021-04/${this.api}.json`
    }

    get headers() {
        return { headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': this.secret
        }
        }
    }

    createCustomer() {
        this.api = endpoints.CUSTOMERS
        const url = this.endpoint
        const customer = setPayload(entities.CUSTOMER, this.req.body)
        const headers = this.headers
        return shopifyCall(url, headers, 'POST', customer)
    }

  }