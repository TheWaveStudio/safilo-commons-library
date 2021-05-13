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

  getEntry(id, locale){
    return this.client.getEntry(id, {locale})
      .then((content) => {
        return content
      })
      .catch(console.error)
  }

  getEntries(query){
    return this.client.getEntries(query)
      .then((content) => {
        return content
      })
      .catch(console.error)
  }
}
