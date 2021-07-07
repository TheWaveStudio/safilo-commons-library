import gql from 'graphql-tag'

const contentCard = `
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
`;


const sliderItem = `
label
title
subtitle
image {
  title
  url
}
ctaText
ctaLink
`

const seoContent= `
title
description
image {
  title
  url
}
`

export const pageBySlug = gql`
query getPageBySlug($slug: String!, $locale: String!) {
  pageCollection(locale: $locale, where: {slug: $slug}) {
    items {
      seo {
        ${seoContent}
      }
      mainContentCollection(limit: 9) {
        items {
          __typename
          ... on Slider {
            position
            sliderItemsCollection(limit: 5) {
              items {
                ${sliderItem}
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
            ${contentCard}
          }
          ... on DoubleCard {
            cardsCollection(limit: 2){
              items{
              ...on ContentCard{
                ${contentCard}
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
export const categoryPage = gql`
query getPageByCategory($category: String!, $subcategory: String, $locale: String!) {
  shopPageCollection(limit: 1, locale: $locale, where: {category: $category, subcategory: $subcategory}) {
    items {
      seo {
        ${seoContent}
      }
      hero {
        title
        description
        image {
          title
          url
        }
      }
      highlightedContentCollection(limit: 2) {
        items {
          ${contentCard}
        }
      }
      bottomSlider {
        sliderItemsCollection(limit: 10) {
          items {
            ${sliderItem}
          }
        }
      }
    }
  }
}
`

