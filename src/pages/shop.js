import React, { useState } from 'react'
import Layout from "../layout/index"
// import ShopNav from "../component/shopNav"
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/theme.scss"
import "../style/shop.scss"
import { useStaticQuery, graphql } from "gatsby"


import { HelmetDatoCms } from 'gatsby-source-datocms'

const Shop = ({ data: { products,
                        paintings,
                        paintingCanvas,
                        paintingPrint,
                        paintingProduct,
                        masks,
                        customs } }) => {

  const [productData, setProductData] = useState(products);

  return(
    <Layout>
      <Container className="themed-container" fluid="sm">
        
        <Row>
          <Col xs="3">
            <div className="shopNav">
              <Nav vertical>
                <NavItem>
                  <NavLink onClick={() => setProductData(products)}>
                    All
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret onClick={() => setProductData(paintings)}>
                    Paintings
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => setProductData(paintingCanvas)}>
                      Canvas
                    </DropdownItem>
                    <DropdownItem onClick={() => setProductData(paintingPrint)}>
                      Prints
                    </DropdownItem>
                    <DropdownItem onClick={() => setProductData(paintingProduct)}>
                      Products
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink onClick={() => setProductData(masks)}>Masks</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => setProductData(customs)}>Custom</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col xs="9">
            <div className="Catalogue">
              {
                productData.edges.map(({ node: product }) => (
                  <div className="Catalogue__item" key={product.id}>
                    <a className="Product__image" href={`/${product.name}`}>
                      <Img sizes={product.image.sizes} />
                      <div className="Product__details">
                        <div className="Product__name">
                          {product.name}
                          <div className="Product__price">
                            {product.price}€
                          </div>
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
  paintings: allDatoCmsProduct(filter: {productType: {eq: "painting"}}) {
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

  paintingCanvas: allDatoCmsProduct(filter: {productType: {eq: "painting"}, paintingType: {eq: "canvas"}}) {
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

  paintingPrint: allDatoCmsProduct(filter: {productType: {eq: "painting"}, paintingType: {eq: "print"}}) {
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

  paintingProduct: allDatoCmsProduct(filter: {productType: {eq: "painting"}, paintingType: {eq: "product"}}) {
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

  masks: allDatoCmsProduct(filter: {productType: {eq: "mask"}}) {
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

  customs: allDatoCmsProduct(filter: {productType: {eq: "custom"}}) {
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
}
`