import React, { useState } from 'react'
import Layout from "../layout/site-layout"

import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

import "bootstrap/dist/css/bootstrap.min.css"
import "../style/theme.scss"
import "../style/shop.scss"

import { graphql } from "gatsby"
import filterProducts from '../helper'
import ShopNav from '../component/shop-nav'

const Shop = ({ data: { products }}) => {

  const unfilteredProductData = products.edges
  const [productData, setProductData] = useState(filterProducts(unfilteredProductData));

  return(
    <Layout>
      <Container className="themed-container" fluid="sm">
        <Row>
          <Col xs="3">
            <ShopNav products={unfilteredProductData} setProductData={setProductData}/>
          </Col>
          <Col xs="9">
            <div className="Catalogue">
              {
                productData.map(({ node: product }) => (
                  <div className="Catalogue__item" key={product.id}>
                    <a className="Product__image" href={`/${product.name}`}>
                      <Img sizes={product.image.sizes} />
                      <div className="Product__details">
                        <div className="Product__name">
                          {product.name}
                        </div>
                        <div className="Product__price">
                          ${product.price}
                        </div>
                      </div>
                    </a>
                    <div
                      className="Product snipcart-add-item"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-image={product.image.url}
                      data-item-name={product.name}
                      data-item-url={`/`}
                    >
                      <span className="Product__buy">Buy now</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
  
}

export default Shop

export const query = graphql`
query {
  products: allDatoCmsProduct {
    edges {
      node {
        id
        name
        productType
        paintingType
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
}
`