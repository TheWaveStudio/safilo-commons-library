import gql from 'graphql-tag'

export const pageBySlug = gql`
  query getPageBySlug($slug: String!, $locale: String!) {
  pageCollection(locale: $locale, where: {slug: $slug}) {
    items {
      seo {
        titoloSeo
        descrizioneSeo
        openGraphImage {
          title
          url
        }
      }
      mainContentCollection(limit: 9) {
        items {
          __typename
          ... on Slider {
            sliderItemsCollection(limit: 5) {
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
          ... on Products {
            ids
            tag
            ordinamento
          }
          ... on Collections {
            ids
            tag
          }
        }
      }
    }
  }
 }
`