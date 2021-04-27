const contentful = require('contentful')

export class Contentful {
  constructor ({ spaceId: space, accessToken }) {
    this.client = contentful.createClient({ space, accessToken })
  }

  getSpace () {
    return this.client.getSpace()
    .then((space) => space)
    .catch(console.error)
  }
}