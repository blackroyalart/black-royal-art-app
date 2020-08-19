import React from 'react'
import Layout from "../layouts/index"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default function Shop() {
  const data = useStaticQuery(graphql`
    query {
      products: allDatoCmsProduct {
        edges {
          node {
            id
            name
            price
            image {
              url
              sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `)

  return (
    <Layout site={data.site}>
      <div className="shopping-cart">
        <div className="Header__summary snipcart-summary snipcart-checkout">      
          <div className="Header__summary__title">
            🛍 MY CART 🛍
          </div>
          <div className="Header__summary__line">
            Number of items: <span className="snipcart-total-items"></span>
          </div>
          <div className="Header__summary__line">
            Total price: <span className="snipcart-total-price"></span>
          </div>
        </div>
      </div>
      <div className="Catalogue">
        {
          data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div
                className="Product snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={`/`}
              >
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div> <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">
                      {product.price}€
                    </div>
                  </div>
                  <span className="Product__buy">Buy now</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}