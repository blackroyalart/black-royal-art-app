import React, { useState } from 'react'
import Layout from "../layout/site-layout"

import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

import "bootstrap/dist/css/bootstrap.min.css"
import "../style/theme.scss"
import "../style/shop.scss"

import { graphql } from "gatsby"
import filterProducts from '../api/helper'
import ShopNav from '../component/shop-nav'
import Rating from '../component/rating'

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
            <h1>S<div className="highlight">hop</div></h1>
            <div className="Catalogue">
              {
                productData.map(({ node: product }) => (
                  <div className="Catalogue__item" key={product.id}>
                    <a className="Product__image" href={`/${product.name}`}>
                      <Img fluid={product.image.sizes} />
                      <div className="Product__details">
                        <div className="Product__name">
                          {product.name}
                        </div>
                        <div className="Product__price">
                          ${product.price}
                        </div>
                      </div>
                    </a>
                    <Rating value={product.rating}/>
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
        rating
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