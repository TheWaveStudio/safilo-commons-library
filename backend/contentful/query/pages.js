import gql from 'graphql-tag'

export const pageBySlug = gql`
  query myQuery($slug: String!, $locale: String!) {
  pageCollection(locale: $locale, where: {slug: $slug}) {
    items {
      hero {
        sliderItemsCollection(limit: 10) {
          items {
            title
            subtitle
            image {
              title
              url
            }
            ctaText
          }
        }
      }
      products {
        product
      }
      collections {
        collections
      }
      highlightedProducts {
        product
      }
      bottomSlider {
        sliderItemsCollection(limit: 10) {
          items {
            title
            subtitle
            image {
              title
              url
            }
            ctaText
          }
        }
      }
    }
  }
}
`
