import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import ProductGrid from '../components/ProductGrid'

function CollectionPage({ data }) {

  let products = data.allMoltinProduct.edges;
  return (
    <React.Fragment>
      <PageTitle title='all products' />
      <ProductGrid products={products} />
    </React.Fragment>
  )
}

export default CollectionPage

export const query = graphql`
query {
  allMoltinProduct {
    edges {
      node {
        id
        name
        description
        slug
        sku
        price {
          amount
          currency
          includes_tax
        }
        meta {
          display_price {
            with_tax {
              formatted
            }
          }
        }
      }
    }
  }
}
`
