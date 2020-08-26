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
import { Cart4 as CartIcon } from 'react-bootstrap-icons';
// import { getProducts } from '../gql-queries/shop-queries'

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
  `)

  const [productData, setProductData] = useState(data.products);

  return (
    <Layout>
      <Container className="themed-container" fluid="sm">
        <div className="shopping-cart">
          <div className="Header__summary snipcart-summary snipcart-checkout">      
            <CartIcon className="cart-button" width={200} height={200}/>
          </div>
        </div>
        <Row>
          <Col xs="3">
            <div className="shopNav">
              <Nav vertical>
                <NavItem>
                  <NavLink onClick={() => setProductData(data.products)}>
                    All
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret onClick={() => setProductData(data.paintings)}>
                    Paintings
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => setProductData(data.paintingCanvas)}>
                      Canvas
                    </DropdownItem>
                    <DropdownItem onClick={() => setProductData(data.paintingPrint)}>
                      Prints
                    </DropdownItem>
                    <DropdownItem onClick={() => setProductData(data.paintingProduct)}>
                      Products
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink onClick={() => setProductData(data.masks)}>Masks</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => setProductData(data.customs)}>Custom</NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col xs="9">
            <div className="Catalogue">
              {
                productData.edges.map(({ node: product }) => (
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
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}