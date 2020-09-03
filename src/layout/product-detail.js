import React, { useState } from 'react';
import { graphql } from "gatsby"
import Layout from "./site-layout"
import Img from 'gatsby-image'
import '../style/MerchInfo.scss'
import { Row, Col } from 'reactstrap'
import Rating from '../component/rating'
import '../style/product-details.scss'


export default function ProductDetail({ data: {product, reviews} }) {
  
  const [prodQty, setProdQty] = useState(1);
  return (
    <Layout>
      <Row className="product-row">
        <Col xs="6">
          <Img sizes={product.image.sizes} />
        </Col>
        <Col xs="6">
          <h1>
            <span className="product-name">{product.name}</span>
            <div className="product-rating">
              <Rating value={product.rating}/>
            </div>
          </h1>
          <p className="product-description">
            {product.description}
          </p>
          <div>
            <button class="btn btn-primary" onClick={() => setProdQty(prodQty-1)}>-</button>
            <span>
              {prodQty}
            </span>
            <button class="btn btn-primary" onClick={() => setProdQty(prodQty+1)}>+</button>
          </div>
          <span>
            {product.price}
          </span>
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
        </Col>
      </Row>

      <div>
        <h1>Reviews</h1>
        {reviews.edges.length > 0 ? (
          <>
            {reviews.edges.map(({node: review}) => {
              return(<div>
                {review.name}
                {review.rating}
                {review.content}
                {review.createdAt}
              </div>)
            })}
          </>
        ) : (
          <>
            No Reviews yet. :(
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