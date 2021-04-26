const contentful = require('contentful')

export class Contentful {
  constructor ({ spaceId, accessToken }) {
    this.client = contentful.createClient({
      space: spaceId,
      accessToken: accessToken
    })
  }

  getSpace () {
    return this.client.getSpace()
    .then((space) => {return space})
    .catch(console.error)
  }
}