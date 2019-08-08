import React from 'react'
import { Link } from 'gatsby'


import Photo from './Photo'
import Badge from './Badge'

export default function ProductGrid({ loading, products }) {
  if (!products) {
    return <p>No products.</p>
  }
  //console.log(products)
  return (
    <div className="flex flex-wrap -mx-5">


      {products.map((product) => {
        console.log(product)
        return (
            <article key={product.node.slug} className="px-5 py-2 w-full md:p-5 md:w-1/2 lg:w-1/3">
              <Link
                to={`/products/${product.node.slug}`}
                className="block w-full h-full no-underline"
              >
                <div className="pt-4 pb-2">
                  <p className="text-black no-underline flex items-center">
                    {product.node.name}
                    <br/>
                    {product.node.description}
                    <br/>
                    {product.node.meta.display_price.with_tax.formatted}
                  </p>
                </div>
              </Link>
            </article>
        )
      })}


    </div>
  )
}
