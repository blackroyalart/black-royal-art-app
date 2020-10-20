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
              ${product.price}
            </div>
            <div className="product-add-items">   
              <button class="btn product-button" onClick={() => setProdQty(prodQty-1)}>-</button>
              <span>
                {prodQty}
              </span>
              <button class="btn btn-primary" onClick={() => setProdQty(prodQty+1)}>+</button>
              <div
                className="Product snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-quantity={prodQty}
                data-item-url={`/`}
              >
                <span className="Product__buy">Add to cart</span>
              </div>
            </div>
            
          </div>
        </Col>
      </Row>

      <div className="shop-item-review-rating">
        <h1><i>Reviews & Ratings</i></h1>
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
              <h2>michelle lam</h2>
              <p className="product-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor, velit ut vehicula vehicula, enim ante sollicitudin arcu, vitae vestibulum felis turpis eget eros. Nam pulvinar id metus nec pulvinar. Pellentesque nec mi eros. Suspendisse mollis eros non iaculis aliquam. Vivamus vitae metus sed dolor consequat tincidunt ut nec tortor. Nulla imperdiet augue in tristique tempus. Donec semper dui nec ante lacinia malesuada. Fusce eget ipsum non metus vulputate pellentesque. Nulla auctor ligula eu tristique imperdiet. Etiam orci sem, rutrum non gravida ac, aliquam quis leo. Cras lobortis auctor neque id fringilla. Ut lobortis aliquam dolor at cursus.
              </p>
              <p className="product-rating">
                <Rating value={3}/>
              </p>
            </div>
          </>
        )}
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