import { httpMethods } from '../../commons/enums/axios'
const contentful = require('contentful')
const pagesQuery = require('../query/pages')
const { constructGraphQLRequest } = require('../../commons/utils/commons')
const { contentfulCall } = require('../../commons/adapters/axios')

export class Contentful {
  constructor ({ spaceId: space, accessToken }) {
    this.client = contentful.createClient({ space, accessToken })
    this.spaceId = space;
    this.accessToken = accessToken;
    this.callContent = this.generateCallStore(this.spaceId, this.accessToken)
  }

  /**
   * GenerateCallStore function
   * @req request
   * @returns Promise response
   */
  generateCallStore(spaceId, accessToken, options) {
    return (spaceId, accessToken, options)
      ? contentfulCall(spaceId, accessToken,  options)
      : (options) => contentfulCall(spaceId, accessToken, options)
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
      .catch((error) => {
        throw error
      })
  }

  getEntries(query){
    return this.client.getEntries(query)
      .then((content) => {
        return content
      })
      .catch((error) => {
        throw error
      })
  }

  async getPageContent(req) {
    const variables = {slug: req.body.slug, locale: req.params.lang};
    const {mutation} = constructGraphQLRequest(variables, pagesQuery.pageBySlug)
    return this.callContent({ method: httpMethods.POST, query: mutation, variables})
  }

  async getSiteOptions(req) {
    const variables = {locale: req.params.lang};
    const {mutation} = constructGraphQLRequest(variables, optionsQuery.options)
    return this.callContent({ method: httpMethods.POST, query: mutation, variables})
  }
}
