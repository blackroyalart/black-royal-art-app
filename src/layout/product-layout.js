import React, { useState } from 'react';
import { graphql } from "gatsby"
import Layout from "./site-layout"
import Img from 'gatsby-image'
import '../style/MerchInfo.scss'
import { Row, Col } from 'reactstrap'
import Rating from '../component/rating'
import '../style/ProductLayout.scss'


export default function ProductLayout({ data: {product, reviews} }) {
  function formatProductId(product) {
    return product.split('-')[1]
  }
  const [prodQty, setProdQty] = useState(1);

  const ProductSection = () => {
    return(
      <Row className="product-row">
        <Col xs="6">
          <Img fluid={product.image.sizes} />
        </Col>
        <Col xs="6">
          <div className="product-header">
            <div className="product-name">{product.name}</div>
            <div className="product-rating">
              <Rating value={product.rating}/>
            </div>
          </div>
          <p className="product-description">
            {product.description}
          </p>
          <div className="product-actions">
            <div className="product-price">
              <strong>
                ${product.price}
              </strong>
            </div>
            <div className="product-add-items">   
              <button className="btn btn-primary" onClick={() => setProdQty(prodQty-1)}>-</button>
              <span className="product-qty">
                {prodQty}
              </span>
              <button className="btn btn-primary" onClick={() => setProdQty(prodQty+1)}>+</button>
              <button
                className="Product snipcart-add-item"
                data-item-id={formatProductId(product.id)}
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
    )
  }

  const Review = ({content: review}) => {
    return(
      <div>
        <Row>
          <Col xs="6">
            <h2>{review.name}</h2>
          </Col>
          <Col xs="6">
          <p className="product-rating">
            <Rating value={review.rating}/>
          </p>
          </Col>
        </Row>
        <p className="product-content">
          {review.content}
        </p>
      </div>
    )
  }

  const ReviewSection = () => {
    return(
      <div className="shop-item-review-rating">
        <h1 className="product-reviews-ratings">
          <i>Re<span className="highlight">views & Ratings</span></i>
        </h1>
        {reviews.edges.length > 0 ? (
          <>
            {reviews.edges.map(({node: review}) => {
              return(
                <Review content={review}/>
              )
            })}
          </>
        ) : (
          <>
            No reviews yet. :(
          </>
        )}
      </div>
    )
  }

  return (
    <Layout>
      <div className="product-layout">
        <ProductSection/>
        <ReviewSection/>
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