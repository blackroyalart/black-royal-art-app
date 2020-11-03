import React, { useState } from 'react';
import { graphql } from "gatsby"
import Layout from "./site-layout"
import Img from 'gatsby-image'
import '../style/MerchInfo.scss'
import { Row, Col } from 'reactstrap'
import Rating from '../component/rating'
import '../style/ProductLayout.scss'


export default function ProductLayout({ data: {product, reviews} }) {
  
  const [prodQty, setProdQty] = useState(1);
  return (
    <Layout>
      <div className="product-layout">
        <Row className="product-row">
          <Col xs="6">
            <Img sizes={product.image.sizes} />
          </Col>
          <Col xs="6">
            <div className="product-header">
              <div className="product-name">{product.name}</div>
              <div className="product-rating">
                <Rating value={product.rating}/>
              </div>
            </div>
            <p className="product-description">
              <p>
                {product.id}
              </p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor, velit ut 
              vehicula vehicula, enim ante sollicitudin arcu, vitae vestibulum felis turpis eget 
              eros. Nam pulvinar id metus nec pulvinar. Pellentesque nec mi eros. Suspendisse mollis 
              eros non iaculis aliquam. Vivamus vitae metus sed dolor consequat tincidunt ut nec tortor. 
              Nulla imperdiet augue in tristique tempus. Donec semper dui nec ante lacinia malesuada. 
              Fusce eget ipsum non metus vulputate pellentesque. Nulla auctor ligula eu tristique 
              imperdiet. Etiam orci sem, rutrum non gravida ac, aliquam quis leo. Cras lobortis auctor 
              neque id fringilla. Ut lobortis aliquam dolor at cursus.
              {product.description}
            </p>

            <div className="product-actions">
              <div class="product-price">
                <strong>
                  ${product.price}
                </strong>
              </div>
              <div className="product-add-items">   
                <button class="btn btn-primary" onClick={() => setProdQty(prodQty-1)}>-</button>
                <span className="product-qty">
                  {prodQty}
                </span>
                <button class="btn btn-primary" onClick={() => setProdQty(prodQty+1)}>+</button>
                <button
                  className="Product snipcart-add-item"
                  data-item-id={5834903}
                  data-item-price={product.price}
                  data-item-image={product.image.url}
                  data-item-name={product.name}
                  data-item-quantity={prodQty}
                  data-item-url={`https://black-royal-art.netlify.app/${product.name}`}
                >
                  <span className="Product__buy">Add to cart</span>
                </button>
              </div>
              
            </div>
          </Col>
        </Row>

        <div className="shop-item-review-rating">
          <h1 className="product-reviews-ratings"><i>Re<span class="highlight">views & Ratings</span></i></h1>
          {reviews.edges.length > 0 ? (
            <>
              {reviews.edges.map(({node: review}) => {
                return(<div>
                  <h2>{review.name}</h2>
                  <Rating value={review.rating}/>
                  <p className="product-content">
                    {review.content}
                  </p>
                  <p className="product-rating">
                    <Rating value={review.rating}/>
                  </p>
                </div>)
              })}
            </>
          ) : (
            <>
              <div>
                <Row>
                  <Col xs="6">
                    <h2>michelle lam</h2>
                  </Col>
                  <Col xs="6">
                  <p className="product-rating">
                    <Rating value={3}/>
                  </p>
                  </Col>
                </Row>
                
                <p className="product-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor, velit ut vehicula vehicula, enim ante sollicitudin arcu, vitae vestibulum felis turpis eget eros. Nam pulvinar id metus nec pulvinar. Pellentesque nec mi eros. Suspendisse mollis eros non iaculis aliquam. Vivamus vitae metus sed dolor consequat tincidunt ut nec tortor. Nulla imperdiet augue in tristique tempus. Donec semper dui nec ante lacinia malesuada. Fusce eget ipsum non metus vulputate pellentesque. Nulla auctor ligula eu tristique imperdiet. Etiam orci sem, rutrum non gravida ac, aliquam quis leo. Cras lobortis auctor neque id fringilla. Ut lobortis aliquam dolor at cursus.
                </p>
                
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    product: datoCmsProduct(name: { eq: $slug }) {
      id
      name
      price
      description
      rating
      image {
        url
        sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
    reviews: allDatoCmsReview(filter: {product: {name: {eq: $slug}}}) {
      edges {
        node {
          id
          name
          rating
          content
        }
      }
    }
  }
`