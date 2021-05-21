const { OAuth2Client } = require('google-auth-library')

export class Google {
  constructor ({ clientId, clientSecret }) {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.client = new OAuth2Client(clientId, clientSecret)
  }

  async getUserData (token) {
    const ticket = await this.client.verifyIdToken({
        idToken: token,
      })

    return ticket.getPayload()
  }
}
