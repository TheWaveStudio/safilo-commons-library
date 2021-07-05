import gql from 'graphql-tag'

const mainNavigation = `
  mainNavigation {
        navbarText
        logo {
          title
          url
        }
        menuCollection(limit: 10) {
          items {
            itemsCollection(limit: 8) {
              items {
                link {
                  text
                  path
                }
                submenuCollection(limit: 10) {
                  items {
                    text
                    path
                  }
                }
                collectionsProductsCollection(limit: 4) {
                  items {
                    type
                    title
                    subtitle
                    image {
                      title
                      url
                    }
                    ctaText
                    ctaLink
                    columns
                    label
                  }
                }
                filtersCollection(limit: 10) {
                  items {
                    label
                    image {
                      title
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
`

export const options = gql`
query SiteOptions($locale: String!) {
  optionsCollection(limit: 1, locale: $locale) {
    items {
      ${mainNavigation}
    }
  }
}
`
