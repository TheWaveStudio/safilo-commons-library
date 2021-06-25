import gql from 'graphql-tag'

export const pageBySlug = gql`
query getPageBySlug($slug: String!, $locale: String!) {
  pageCollection(locale: $locale, where: {slug: $slug}) {
    items {
      seo {
        title
        description
        image {
          title
          url
        }
      }
      mainContentCollection(limit: 9) {
        items {
          __typename
          ... on Slider {
            position
            sliderItemsCollection(limit: 5) {
              items {
                label
                title
                subtitle
                image {
                  title
                  url
                }
                ctaText
                ctaLink
              }
            }
          }
          ... on Products {
            type
            ids
            tag
            orderBy
          }
          ... on Collections {
            title
            ids
            tag
            type
          }
           ... on ContentCard {
            title
            subtitle
            label
            image {
              title
              url
            }
            ctaText
            ctaLink
            columns
            type
          }
          ... on DoubleCard {
            cardsCollection(limit: 2){
              items{
              ...on ContentCard{
                title
                subtitle
                label
                image {
                  title
                  url
                }
                ctaText
                ctaLink
                columns
                type
               }
              }
            }
          }
        }
      }
    }
  }
}
`
